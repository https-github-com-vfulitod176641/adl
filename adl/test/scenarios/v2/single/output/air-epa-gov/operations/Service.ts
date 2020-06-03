export interface Service {
    /**
     * Clean Air Act Download Data Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.
     * @http GET /air_rest_services.get_download
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_download'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<string>, qid: Http.Query<string>, qcolumns?: Http.Query<string>, p_pretty_print?: Http.Query<double>): Http.Response<'200', file, 'application/xml'>;
    /**
     * Clean Air Act Download Data Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.
     * @http POST /air_rest_services.get_download
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_download'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<string>, qid: Http.FormData<string>, qcolumns?: Http.FormData<string>, p_pretty_print?: Http.FormData<double>): Http.Response<'200', file, 'application/xml'>;
    /**
     * Clean Air Act Facility Search
     * @description Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size
     * @http GET /air_rest_services.get_facilities
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_facilities'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<"JSONP" | "JSON" | "XML">, p_fn?: Http.Query<string>, p_sa?: Http.Query<string>, p_sa1?: Http.Query<string>, p_ct?: Http.Query<string>, p_co?: Http.Query<string>, p_fips?: Http.Query<string>, p_st?: Http.Query<string>, p_zip?: Http.Query<string>, p_lcon?: Http.Query<string>, p_frs?: Http.Query<string>, p_reg?: Http.Query<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: Http.Query<string>, p_ncs?: Http.Query<string>, p_qnc?: Http.Query<double>, p_pen?: Http.Query<string>, p_opst?: Http.Query<string>, p_c1lat?: Http.Query<double>, p_c1lon?: Http.Query<double>, p_c2lat?: Http.Query<double>, p_c2lon?: Http.Query<double>, p_usmex?: Http.Query<"Y" | "N">, p_sic2?: Http.Query<string>, p_sic4?: Http.Query<string>, p_fa?: Http.Query<string>, p_act?: Http.Query<"Y" | "N" | "A">, p_maj?: Http.Query<"Y" | "N">, p_mact?: Http.Query<string>, p_nsps?: Http.Query<string>, p_nspsm?: Http.Query<string>, p_prog?: Http.Query<string>, p_fea?: Http.Query<"W" | "N">, p_feay?: Http.Query<1 | 2 | 3 | 4 | 5>, p_feaa?: Http.Query<"A" | "E" | "S">, p_iea?: Http.Query<"W" | "N">, p_ieay?: Http.Query<1 | 2 | 3 | 4 | 5>, p_ieaa?: Http.Query<"E" | "S">, p_qiv?: Http.Query<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: Http.Query<string>, p_impw?: Http.Query<"Y" | "N">, p_trep?: Http.Query<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: Http.Query<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: Http.Query<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: Http.Query<double>, p_tri_pol?: Http.Query<string>, p_ghg_cat?: Http.Query<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: Http.Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: Http.Query<double>, p_ghg_yr?: Http.Query<string>, p_nei_pol?: Http.Query<string>, p_nei_amt?: Http.Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: Http.Query<double>, p_nei_yr?: Http.Query<string>, p_nei_cat?: Http.Query<string>, p_pm?: Http.Query<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: Http.Query<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: Http.Query<"Y" | "N">, p_huc?: Http.Query<string>, p_wbd?: Http.Query<string>, p_pid?: Http.Query<string>, p_med?: Http.Query<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: Http.Query<"W" | "N" | "NV">, p_ysly?: Http.Query<1 | 2 | 3 | 4 | 5>, p_ysla?: Http.Query<"E" | "S" | "A">, p_stsl?: Http.Query<"W" | "N">, p_stsly?: Http.Query<1 | 2 | 3 | 4 | 5>, p_stsla?: Http.Query<"A" | "E" | "S">, p_stres?: Http.Query<string>, p_sttyp?: Http.Query<string>, p_qs?: Http.Query<string>, p_sfs?: Http.Query<string>, p_tribeid?: Http.Query<double>, p_tribename?: Http.Query<string>, p_tribedist?: Http.Query<double>, p_owop?: Http.Query<string>, p_agoo?: Http.Query<"AND" | "OR">, p_idt1?: Http.Query<string>, p_idt2?: Http.Query<string>, p_stdt1?: Http.Query<string>, p_stdt2?: Http.Query<string>, p_pityp?: Http.Query<string>, p_cifdi?: Http.Query<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: Http.Query<string>, p_pfead2?: Http.Query<string>, p_pfeat?: Http.Query<string>, p_psncq?: Http.Query<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: Http.Query<"Off" | "Partial" | "On">, p_swpa?: Http.Query<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: Http.Query<string>, p_fntype?: Http.Query<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: Http.Query<string>, p_recvio?: Http.Query<string>, p_pollvio?: Http.Query<string>, p_ar?: Http.Query<string>, p_tri_yr?: Http.Query<string>, p_pidall?: Http.Query<"Y" | "N">, p_fac_ico?: Http.Query<"Y" | "N">, p_icoo?: Http.Query<string>, p_fac_icos?: Http.Query<string>, p_ejscreen?: Http.Query<string>, p_limit_addr?: Http.Query<"Y" | "N">, p_lat?: Http.Query<double>, p_long?: Http.Query<double>, p_radius?: Http.Query<double>, p_decouple?: Http.Query<"Y" | "N">, p_ejscreen_over80cnt?: Http.Query<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: Http.Query<double>, responseset?: Http.Query<double>, tablelist?: Http.Query<"Y" | "N">, maplist?: Http.Query<"Y" | "N">, summarylist?: Http.Query<"Y" | "N">, callback?: Http.Query<string>, qcolumns?: Http.Query<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: air2_Results;
    }, 'application/xml'>;
    /**
     * Clean Air Act Facility Search
     * @description Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size
     * @http POST /air_rest_services.get_facilities
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_facilities'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<"JSONP" | "JSON" | "XML">, p_fn?: Http.FormData<string>, p_sa?: Http.FormData<string>, p_sa1?: Http.FormData<string>, p_ct?: Http.FormData<string>, p_co?: Http.FormData<string>, p_fips?: Http.FormData<string>, p_st?: Http.FormData<string>, p_zip?: Http.FormData<string>, p_lcon?: Http.FormData<string>, p_frs?: Http.FormData<string>, p_reg?: Http.FormData<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: Http.FormData<string>, p_ncs?: Http.FormData<string>, p_qnc?: Http.FormData<double>, p_pen?: Http.FormData<string>, p_opst?: Http.FormData<string>, p_c1lat?: Http.FormData<double>, p_c1lon?: Http.FormData<double>, p_c2lat?: Http.FormData<double>, p_c2lon?: Http.FormData<double>, p_usmex?: Http.FormData<"Y" | "N">, p_sic2?: Http.FormData<string>, p_sic4?: Http.FormData<string>, p_fa?: Http.FormData<string>, p_act?: Http.FormData<"Y" | "N" | "A">, p_maj?: Http.FormData<"Y" | "N">, p_mact?: Http.FormData<string>, p_nsps?: Http.FormData<string>, p_nspsm?: Http.FormData<string>, p_prog?: Http.FormData<string>, p_fea?: Http.FormData<"W" | "N">, p_feay?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_feaa?: Http.FormData<"A" | "E" | "S">, p_iea?: Http.FormData<"W" | "N">, p_ieay?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_ieaa?: Http.FormData<"E" | "S">, p_qiv?: Http.FormData<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: Http.FormData<string>, p_impw?: Http.FormData<"Y" | "N">, p_trep?: Http.FormData<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: Http.FormData<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: Http.FormData<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: Http.FormData<double>, p_tri_pol?: Http.FormData<string>, p_ghg_cat?: Http.FormData<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: Http.FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: Http.FormData<double>, p_ghg_yr?: Http.FormData<string>, p_nei_pol?: Http.FormData<string>, p_nei_amt?: Http.FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: Http.FormData<double>, p_nei_yr?: Http.FormData<string>, p_nei_cat?: Http.FormData<string>, p_pm?: Http.FormData<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: Http.FormData<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: Http.FormData<"Y" | "N">, p_huc?: Http.FormData<string>, p_wbd?: Http.FormData<string>, p_pid?: Http.FormData<string>, p_med?: Http.FormData<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: Http.FormData<"W" | "N" | "NV">, p_ysly?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_ysla?: Http.FormData<"E" | "S" | "A">, p_stsl?: Http.FormData<"W" | "N">, p_stsly?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_stsla?: Http.FormData<"A" | "E" | "S">, p_stres?: Http.FormData<string>, p_sttyp?: Http.FormData<string>, p_qs?: Http.FormData<string>, p_sfs?: Http.FormData<string>, p_tribeid?: Http.FormData<double>, p_tribename?: Http.FormData<string>, p_tribedist?: Http.FormData<double>, p_owop?: Http.FormData<string>, p_agoo?: Http.FormData<"AND" | "OR">, p_idt1?: Http.FormData<string>, p_idt2?: Http.FormData<string>, p_stdt1?: Http.FormData<string>, p_stdt2?: Http.FormData<string>, p_pityp?: Http.FormData<string>, p_cifdi?: Http.FormData<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: Http.FormData<string>, p_pfead2?: Http.FormData<string>, p_pfeat?: Http.FormData<string>, p_psncq?: Http.FormData<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: Http.FormData<"Off" | "Partial" | "On">, p_swpa?: Http.FormData<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: Http.FormData<string>, p_fntype?: Http.FormData<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: Http.FormData<string>, p_recvio?: Http.FormData<string>, p_pollvio?: Http.FormData<string>, p_ar?: Http.FormData<string>, p_tri_yr?: Http.FormData<string>, p_pidall?: Http.FormData<"Y" | "N">, p_fac_ico?: Http.FormData<"Y" | "N">, p_icoo?: Http.FormData<string>, p_fac_icos?: Http.FormData<string>, p_ejscreen?: Http.FormData<string>, p_limit_addr?: Http.FormData<"Y" | "N">, p_lat?: Http.FormData<double>, p_long?: Http.FormData<double>, p_radius?: Http.FormData<double>, p_decouple?: Http.FormData<"Y" | "N">, p_ejscreen_over80cnt?: Http.FormData<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: Http.FormData<double>, responseset?: Http.FormData<double>, tablelist?: Http.FormData<"Y" | "N">, maplist?: Http.FormData<"Y" | "N">, summarylist?: Http.FormData<"Y" | "N">, callback?: Http.FormData<string>, qcolumns?: Http.FormData<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: air2_Results;
    }, 'application/xml'>;
    /**
     * Clean Air Act Facility Enhanced Search
     * @description Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.
     * @http GET /air_rest_services.get_facility_info
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_facility_info'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<string>, p_fn?: Http.Query<string>, p_sa?: Http.Query<string>, p_sa1?: Http.Query<string>, p_ct?: Http.Query<string>, p_co?: Http.Query<string>, p_fips?: Http.Query<string>, p_st?: Http.Query<string>, p_zip?: Http.Query<string>, p_lcon?: Http.Query<string>, p_frs?: Http.Query<string>, p_reg?: Http.Query<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: Http.Query<string>, p_ncs?: Http.Query<string>, p_qnc?: Http.Query<double>, p_pen?: Http.Query<string>, p_opst?: Http.Query<string>, xmin?: Http.Query<double>, ymin?: Http.Query<double>, xmax?: Http.Query<double>, ymax?: Http.Query<double>, p_usmex?: Http.Query<"Y" | "N">, p_sic2?: Http.Query<string>, p_sic4?: Http.Query<string>, p_fa?: Http.Query<string>, p_act?: Http.Query<"Y" | "N" | "A">, p_maj?: Http.Query<"Y" | "N">, p_mact?: Http.Query<string>, p_nsps?: Http.Query<string>, p_nspsm?: Http.Query<string>, p_prog?: Http.Query<string>, p_fea?: Http.Query<"W" | "N">, p_feay?: Http.Query<1 | 2 | 3 | 4 | 5>, p_feaa?: Http.Query<"A" | "E" | "S">, p_iea?: Http.Query<"W" | "N">, p_ieay?: Http.Query<1 | 2 | 3 | 4 | 5>, p_ieaa?: Http.Query<"E" | "S">, p_qiv?: Http.Query<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: Http.Query<string>, p_impw?: Http.Query<"Y" | "N">, p_trep?: Http.Query<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: Http.Query<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: Http.Query<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: Http.Query<double>, p_tri_pol?: Http.Query<string>, p_ghg_cat?: Http.Query<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: Http.Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: Http.Query<double>, p_ghg_yr?: Http.Query<string>, p_nei_pol?: Http.Query<string>, p_nei_amt?: Http.Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: Http.Query<double>, p_nei_yr?: Http.Query<string>, p_nei_cat?: Http.Query<string>, p_pm?: Http.Query<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: Http.Query<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: Http.Query<"Y" | "N">, p_huc?: Http.Query<string>, p_wbd?: Http.Query<string>, p_pid?: Http.Query<string>, p_med?: Http.Query<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: Http.Query<"W" | "N" | "NV">, p_ysly?: Http.Query<1 | 2 | 3 | 4 | 5>, p_ysla?: Http.Query<"E" | "S" | "A">, p_stsl?: Http.Query<"W" | "N">, p_stsly?: Http.Query<1 | 2 | 3 | 4 | 5>, p_stsla?: Http.Query<"A" | "E" | "S">, p_stres?: Http.Query<string>, p_sttyp?: Http.Query<string>, p_qs?: Http.Query<string>, p_sfs?: Http.Query<string>, p_tribeid?: Http.Query<double>, p_tribename?: Http.Query<string>, p_tribedist?: Http.Query<double>, p_owop?: Http.Query<string>, p_agoo?: Http.Query<"AND" | "OR">, p_idt1?: Http.Query<string>, p_idt2?: Http.Query<string>, p_stdt1?: Http.Query<string>, p_stdt2?: Http.Query<string>, p_pityp?: Http.Query<string>, p_cifdi?: Http.Query<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: Http.Query<string>, p_pfead2?: Http.Query<string>, p_pfeat?: Http.Query<string>, p_psncq?: Http.Query<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: Http.Query<"Off" | "Partial" | "On">, p_swpa?: Http.Query<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: Http.Query<string>, p_fntype?: Http.Query<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: Http.Query<string>, p_recvio?: Http.Query<string>, p_pollvio?: Http.Query<string>, p_ar?: Http.Query<string>, p_tri_yr?: Http.Query<string>, p_pidall?: Http.Query<"Y" | "N">, p_fac_ico?: Http.Query<"Y" | "N">, p_icoo?: Http.Query<string>, p_fac_icos?: Http.Query<string>, p_ejscreen?: Http.Query<string>, p_limit_addr?: Http.Query<"Y" | "N">, p_lat?: Http.Query<double>, p_long?: Http.Query<double>, p_radius?: Http.Query<double>, p_decouple?: Http.Query<"Y" | "N">, p_ejscreen_over80cnt?: Http.Query<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: Http.Query<double>, responseset?: Http.Query<double>, summarylist?: Http.Query<"Y" | "N">, callback?: Http.Query<string>, qcolumns?: Http.Query<string>, p_pretty_print?: Http.Query<double>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: air3_Results;
    }, 'application/xml'>;
    /**
     * Clean Air Act Facility Enhanced Search
     * @description Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.
     * @http POST /air_rest_services.get_facility_info
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_facility_info'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<string>, p_fn?: Http.FormData<string>, p_sa?: Http.FormData<string>, p_sa1?: Http.FormData<string>, p_ct?: Http.FormData<string>, p_co?: Http.FormData<string>, p_fips?: Http.FormData<string>, p_st?: Http.FormData<string>, p_zip?: Http.FormData<string>, p_lcon?: Http.FormData<string>, p_frs?: Http.FormData<string>, p_reg?: Http.FormData<"01" | "02" | "03" | "04" | "05" | "06" | "07" | 8 | 9 | "10">, p_sic?: Http.FormData<string>, p_ncs?: Http.FormData<string>, p_qnc?: Http.FormData<double>, p_pen?: Http.FormData<string>, p_opst?: Http.FormData<string>, xmin?: Http.FormData<double>, ymin?: Http.FormData<double>, xmax?: Http.FormData<double>, ymax?: Http.FormData<double>, p_usmex?: Http.FormData<"Y" | "N">, p_sic2?: Http.FormData<string>, p_sic4?: Http.FormData<string>, p_fa?: Http.FormData<string>, p_act?: Http.FormData<"Y" | "N" | "A">, p_maj?: Http.FormData<"Y" | "N">, p_mact?: Http.FormData<string>, p_nsps?: Http.FormData<string>, p_nspsm?: Http.FormData<string>, p_prog?: Http.FormData<string>, p_fea?: Http.FormData<"W" | "N">, p_feay?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_feaa?: Http.FormData<"A" | "E" | "S">, p_iea?: Http.FormData<"W" | "N">, p_ieay?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_ieaa?: Http.FormData<"E" | "S">, p_qiv?: Http.FormData<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12">, p_naa?: Http.FormData<string>, p_impw?: Http.FormData<"Y" | "N">, p_trep?: Http.FormData<"NONE" | "CURR" | "NOTCURR">, p_tri_cat?: Http.FormData<"TOTAL" | "CARC" | "HAP">, p_tri_amt?: Http.FormData<"0" | "GT0" | "GT1000" | "GT5000" | "GT10000" | "GT50000">, p_tri_any_amt?: Http.FormData<double>, p_tri_pol?: Http.FormData<string>, p_ghg_cat?: Http.FormData<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6">, p_ghg_amt?: Http.FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_ghg_any_amt?: Http.FormData<double>, p_ghg_yr?: Http.FormData<string>, p_nei_pol?: Http.FormData<string>, p_nei_amt?: Http.FormData<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000">, p_nei_any_amt?: Http.FormData<double>, p_nei_yr?: Http.FormData<string>, p_nei_cat?: Http.FormData<string>, p_pm?: Http.FormData<"NONE" | "GT5" | "GT10" | "GT25" | "GT50" | "GT75">, p_pd?: Http.FormData<"NONE" | "GT100" | "GT500" | "GT1000" | "GT5000" | "GT10000" | "GT20000">, p_ico?: Http.FormData<"Y" | "N">, p_huc?: Http.FormData<string>, p_wbd?: Http.FormData<string>, p_pid?: Http.FormData<string>, p_med?: Http.FormData<"M" | "R" | "S" | "W" | "ALL">, p_ysl?: Http.FormData<"W" | "N" | "NV">, p_ysly?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_ysla?: Http.FormData<"E" | "S" | "A">, p_stsl?: Http.FormData<"W" | "N">, p_stsly?: Http.FormData<1 | 2 | 3 | 4 | 5>, p_stsla?: Http.FormData<"A" | "E" | "S">, p_stres?: Http.FormData<string>, p_sttyp?: Http.FormData<string>, p_qs?: Http.FormData<string>, p_sfs?: Http.FormData<string>, p_tribeid?: Http.FormData<double>, p_tribename?: Http.FormData<string>, p_tribedist?: Http.FormData<double>, p_owop?: Http.FormData<string>, p_agoo?: Http.FormData<"AND" | "OR">, p_idt1?: Http.FormData<string>, p_idt2?: Http.FormData<string>, p_stdt1?: Http.FormData<string>, p_stdt2?: Http.FormData<string>, p_pityp?: Http.FormData<string>, p_cifdi?: Http.FormData<"Any" | "Yes" | "No" | "Undetermined">, p_pfead1?: Http.FormData<string>, p_pfead2?: Http.FormData<string>, p_pfeat?: Http.FormData<string>, p_psncq?: Http.FormData<"GT1" | "GE1" | "GT2" | "GE2" | "GT4" | "GE4" | "GT8" | "GE8" | "GT12" | "GE12">, p_pctrack?: Http.FormData<"Off" | "Partial" | "On">, p_swpa?: Http.FormData<"source water" | "surface water" | "ground water" | "waiting for SSO">, p_des?: Http.FormData<string>, p_fntype?: Http.FormData<"ALL" | "CONTAINS" | "EXACT" | "BEGINS">, p_hpvmth?: Http.FormData<string>, p_recvio?: Http.FormData<string>, p_pollvio?: Http.FormData<string>, p_ar?: Http.FormData<string>, p_tri_yr?: Http.FormData<string>, p_pidall?: Http.FormData<"Y" | "N">, p_fac_ico?: Http.FormData<"Y" | "N">, p_icoo?: Http.FormData<string>, p_fac_icos?: Http.FormData<string>, p_ejscreen?: Http.FormData<string>, p_limit_addr?: Http.FormData<"Y" | "N">, p_lat?: Http.FormData<double>, p_long?: Http.FormData<double>, p_radius?: Http.FormData<double>, p_decouple?: Http.FormData<"Y" | "N">, p_ejscreen_over80cnt?: Http.FormData<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11">, queryset?: Http.FormData<double>, responseset?: Http.FormData<double>, summarylist?: Http.FormData<"Y" | "N">, callback?: Http.FormData<string>, qcolumns?: Http.FormData<string>, p_pretty_print?: Http.FormData<double>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: air3_Results;
    }, 'application/xml'>;
    /**
     * Clean Air Act GeoJSON Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.
     * @http GET /air_rest_services.get_geojson
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_geojson'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<string>, qid: Http.Query<string>, callback?: Http.Query<string>, newsort?: Http.Query<double>, descending?: Http.Query<"Y" | "N">, qcolumns?: Http.Query<string>, p_pretty_print?: Http.Query<double>): Http.Response<'200', {
        /**
         * @description Array of features in the feature collection.
         * @since 0.0.0
         */
        features?: Array<air6_Feature>;
        /**
         * @description Static marker indicating object is a GeoJSON Feature Collection.
         * @since 0.0.0
         */
        type?: string;
    }, 'application/xml'>;
    /**
     * Clean Air Act GeoJSON Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.
     * @http POST /air_rest_services.get_geojson
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_geojson'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<string>, qid: Http.FormData<string>, callback?: Http.FormData<string>, newsort?: Http.FormData<double>, descending?: Http.FormData<"Y" | "N">, qcolumns?: Http.FormData<string>, p_pretty_print?: Http.FormData<double>): Http.Response<'200', {
        /**
         * @description Array of features in the feature collection.
         * @since 0.0.0
         */
        features?: Array<air6_Feature>;
        /**
         * @description Static marker indicating object is a GeoJSON Feature Collection.
         * @since 0.0.0
         */
        type?: string;
    }, 'application/xml'>;
    /**
     * Clean Air Act Info Clusters Service
     * @description Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.
     * @http GET /air_rest_services.get_info_clusters
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_info_clusters'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<string>, p_qid: Http.Query<string>, p_pretty_print?: Http.Query<double>): Http.Response<'200', file, 'application/xml'>;
    /**
     * Clean Air Act Info Clusters Service
     * @description Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.
     * @http POST /air_rest_services.get_info_clusters
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_info_clusters'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<string>, p_qid: Http.FormData<string>, p_pretty_print?: Http.FormData<double>): Http.Response<'200', file, 'application/xml'>;
    /**
     * Clean Air Act Map Service
     * @description The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.
     * @http GET /air_rest_services.get_map
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_map'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<"JSONP" | "JSON" | "XML">, qid: Http.Query<string>, callback?: Http.Query<string>, tablelist?: Http.Query<"Y" | "N">, c1_lat?: Http.Query<double>, c1_long?: Http.Query<double>, c2_lat?: Http.Query<double>, c2_long?: Http.Query<double>, p_id: Http.Query<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        MapOutput?: air4_MapOutput;
    }, 'application/xml'>;
    /**
     * Clean Air Act Map Service
     * @description The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.
     * @http POST /air_rest_services.get_map
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_map'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<"JSONP" | "JSON" | "XML">, qid: Http.FormData<string>, callback?: Http.FormData<string>, tablelist?: Http.FormData<"Y" | "N">, c1_lat?: Http.FormData<double>, c1_long?: Http.FormData<double>, c2_lat?: Http.FormData<double>, c2_long?: Http.FormData<double>, p_id: Http.FormData<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        MapOutput?: air4_MapOutput;
    }, 'application/xml'>;
    /**
     * Clean Air Act Search by Query ID
     * @description GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.
     * @http GET /air_rest_services.get_qid
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_qid'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<"JSONP" | "JSON" | "XML">, qid: Http.Query<string>, pageno?: Http.Query<double>, callback?: Http.Query<string>, newsort?: Http.Query<double>, descending?: Http.Query<"Y" | "N">, qcolumns?: Http.Query<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: air5_Results;
    }, 'application/xml'>;
    /**
     * Clean Air Act Search by Query ID
     * @description GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.
     * @http POST /air_rest_services.get_qid
     * @tag Facilities
     * @since 0.0.0
     */
    'air_rest_services.get_qid'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<"JSONP" | "JSON" | "XML">, qid: Http.FormData<string>, pageno?: Http.FormData<double>, callback?: Http.FormData<string>, newsort?: Http.FormData<double>, descending?: Http.FormData<"Y" | "N">, qcolumns?: Http.FormData<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: air5_Results;
    }, 'application/xml'>;
    /**
     * Clean Air Act Metadata Service
     * @description Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.
     * @http GET /air_rest_services.metadata
     * @tag Metadata
     * @since 0.0.0
     */
    'air_rest_services.metadata'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.Query<"JSONP" | "JSON" | "XML">, callback?: Http.Query<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: met1;
    }, 'application/xml'>;
    /**
     * Clean Air Act Metadata Service
     * @description Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.
     * @http POST /air_rest_services.metadata
     * @tag Metadata
     * @since 0.0.0
     */
    'air_rest_services.metadata'(body?: Http.Body<file, 'application/x-www-form-urlencoded'>, output?: Http.FormData<"JSONP" | "JSON" | "XML">, callback?: Http.FormData<string>): Http.Response<'200', {
        /**
         * @since 0.0.0
         */
        Results?: met1;
    }, 'application/xml'>;
}