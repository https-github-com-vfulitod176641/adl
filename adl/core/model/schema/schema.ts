import { Dictionary } from '@azure-tools/linq';
import { anonymous, isAnonymous, valueOf } from '@azure-tools/sourcemap';
import { Node } from 'ts-morph';
import { getPath } from '../../support/typescript';
import { Element, TSElement } from '../element';
import { Identity } from '../name';

export class Schema extends Element {
  /** 
   * name of this schema - may be an alias or an actual string name 
   */
  name: Identity;

  /**
   * short description of the schema
   */
  summary?: string;

  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * if null can be substituted for a value for this schema.
   * 
   * @todo: I'm not fond of having this in schema -- we should strongly consider refactoring this so the consumer gets it (ie, the property)
   */
  nullable?:  boolean;
  /**
   * 
   * @param type the schema 'type' that this schema represents. 
   * @param initializer optional object initializer
   */
  constructor(public type: string, initializer?: Partial<Schema>) {
    super();
    this.name = anonymous(type);
    this.initialize(initializer);
  }
}

export class TSSchema<TNode extends Node> extends TSElement<TNode> implements Schema {
  get targetMap(): Dictionary<any> {
    return {
      ...super.targetMap,
      summary: getPath(this.node, /* path to summary jsdoc */),
      description: getPath(this.node, /* path to description jsdoc */),
    };
  }

  get name(): Identity {
    let result: Identity | undefined = undefined;
    if (Node.isNameableNode(this.node)) {
      result = this.node.getName();
    }
    return result ?? anonymous(this.type);
  }

  set name(value: Identity) {
    if (isAnonymous(value)) {
      throw new Error('Cannot rename this node to anonymous.');
    }
    if (!Node.isRenameableNode(this.node)) {
      throw new Error('This node cannot be renamed.');
    }
    this.node.rename(valueOf(value));
  }

  get summary() {
    return this.getDocSummary();
  }
  set summary(value: string | undefined) {
    this.setDocSummary(value);
  }

  get description() {
    return this.getDocTag('description');
  }
  set description(value: string | undefined) {
    this.setDocTag('description', value);
  }

  nullable?: boolean;

  constructor(public type: string, node: TNode, initializer?: Partial<Schema>) {
    super(node);
    this.initialize(initializer);
  }
}
