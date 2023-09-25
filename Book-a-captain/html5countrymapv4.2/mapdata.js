var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    location_description: "",
    location_url: "",
    location_color: "#00512E",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    SAU1096: {
      name: "نجران",
      image_url: "https://i.ibb.co/KxG1Ys5/3-1651060260.jpg"
    },
    SAU1097: {
      name: "ألرياض",
      image_url: "https://cdn.alweb.com/thumbs/travel/article/fit710x532/%D9%85%D8%A7-%D9%87%D9%8A-%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg"
    },
    SAU1098: {
      name: "المنطقة الشرقية",
      image_url: "https://www.almrsal.com/wp-content/uploads/2020/11/t.jpg"
    },
    SAU845: {
      name: "المدينة المنورة",
      image_url: "https://pbs.twimg.com/media/DFQ1AHbXcAEVoFr.jpg"
    },
    SAU846: {
      name: "القصيم",
      image_url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/47886447.jpg?k=e169e88ecb2f5dc708514644f0ae433494f64eef0a455ce6966aeb3587d97bf1&o=&hp=1"
    },
    SAU847: {
      name: "حائل",
      image_url: "https://www.al-jazirah.com/2021/20210304/tr_43_2.jpg"
    },
    SAU848: {
      name: "تبوك",
      image_url: "data:image/jpeg;base64,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"
    },
    SAU861: {
      name: "الحدود الشمالية",
      image_url: "https://www.ahlanwasahlan.world/sites/default/files/styles/1920x900/public/2021-11/17d296b69355d2dc5de73e7753763345_XL.jpg?h=b301215a&itok=tk53DH5A"
    },
    SAU862: {
      name: "الجوف",
      image_url: "https://www.almrsal.com/wp-content/uploads/2016/05/%D9%82%D9%84%D8%B9%D8%A9-%D8%B2%D8%B9%D8%A8%D9%84.jpg"
    },
    SAU885: {
      name: "الباحة",
      image_url: "https://vid.alarabiya.net/images/2019/07/06/5013005d-bb6d-4a38-8378-f0ac380e387a/5013005d-bb6d-4a38-8378-f0ac380e387a.jpg?crop=4:3&width=1200"
    },
    SAU886: {
      name: "عسير",
      image_url: "https://static.sayidaty.net/2021-09/4614.jpeg"
    },
    SAU887: {
      name: "جازان",
      image_url: "https://explore.rehlat.ae/static/media/searchdestination/priorityImages/Jizan_1.jpg"
    },
    SAU888: {
      name: "مكة",
      image_url: "https://palsawa.com/uploads/images/2022/12/5GElT.jpg"
    }
  },
  locations: {
    "0": {
      lat: "24.653837",
      lng: "46.715683",
      name: "الرياض"
    }
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};