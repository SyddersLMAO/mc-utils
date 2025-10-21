const minecraftLangs = [
      "af_za", "ar_sa", "ast_es", "az_az", "ba_ru", "bar_de", "be_by", "bg_bg", "br_fr", "bs_ba",
      "ca_es", "cs_cz", "cy_gb", "da_dk", "de_at", "de_ch", "de_de", "el_gr", "en_au", "en_ca",
      "en_gb", "en_nz", "en_pt", "en_ud", "en_us", "enp", "enws", "eo_uy", "es_ar", "es_cl", "es_ec",
      "es_es", "es_mx", "es_uy", "es_ve", "et_ee", "eu_es", "fa_ir", "fi_fi", "fil_ph", "fo_fo", "fr_ca",
      "fr_fr", "fra_de", "fur_it", "fy_nl", "ga_ie", "gd_gb", "gl_es", "haw_us", "he_il", "hi_in",
      "hr_hr", "hu_hu", "hy_am", "id_id", "ig_ng", "io_en", "is_is", "it_it", "ja_jp", "jbo_en", "ka_ge",
      "kk_kz", "kn_in", "ko_kr", "ksh_de", "kw_gb", "la_la", "lb_lu", "li_li", "lol_us", "lt_lt",
      "lv_lv", "lzh", "mk_mk", "mn_mn", "ms_my", "mt_mt", "nds_de", "nl_be", "nl_nl", "nn_no", "no_no",
      "oc_fr", "ovd", "pl_pl", "pt_br", "pt_pt", "qya_aa", "ro_ro", "rpr", "ru_ru", "se_no", "sk_sk",
      "sl_si", "sme", "so_so", "sq_al", "sr_sp", "sv_se", "sxu", "szl", "ta_in", "th_th", "tlh_aa",
      "tok", "tr_tr", "tt_ru", "uk_ua", "val_es", "vec_it", "vi_vn", "yi_de", "yo_ng", "zh_cn",
      "zh_hk", "zh_tw"
    ];

    document.getElementById("generateBtn").addEventListener("click", async () => {
      const fileInput = document.getElementById("fileInput");
      const downloadLink = document.getElementById("downloadLink");
      if (!fileInput.files[0]) {
        alert("Please upload a JSON file first!");
        return;
      }

      const file = fileInput.files[0];
      const text = await file.text();
      let jsonData;
      try {
        jsonData = JSON.parse(text);
      } catch (err) {
        alert("Invalid JSON file!");
        return;
      }

      const zip = new JSZip();

      minecraftLangs.forEach(lang => {
        const filePath = `${lang}.json`;
        zip.file(filePath, JSON.stringify(jsonData, null, 2));
      });

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = "lang_pack.zip";
      downloadLink.style.display = "block";
      downloadLink.textContent = "Download ZIP";
    });