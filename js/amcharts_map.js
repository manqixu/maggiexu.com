  var map = AmCharts.makeChart("mapdiv",{
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "#F0F0F0",
    backgroundAlpha : 1,
    zoomControl: {
    zoomControlEnabled : true
    },
    dataProvider : {
    map : "worldHigh",
    getAreasFromMap : true,
    areas :
    [
      {
        "id": "DE",
        "showAsSelected": true
      },
      {
        "id": "GB",
        "showAsSelected": true
      },
      {
        "id": "IE",
        "showAsSelected": true
      },
      {
        "id": "RU",
        "showAsSelected": true
      },
      {
        "id": "MX",
        "showAsSelected": true
      },
      {
        "id": "US",
        "showAsSelected": true
      },
      {
        "id": "CN",
        "showAsSelected": true
      },
      {
        "id": "ID",
        "showAsSelected": true
      },
      {
        "id": "KR",
        "showAsSelected": true
      },
      {
        "id": "MO",
        "showAsSelected": true
      },
      {
        "id": "TW",
        "showAsSelected": true
      },
      {
        "id": "HK",
        "showAsSelected": true
      },
      {
        "id": "SG",
        "showAsSelected": true
      }
    ]
    },
    areasSettings : {
    autoZoom : true,
    color : "#c3c3c3",
    colorSolid : "#E3B1B1",
    selectedColor : "#E3B1B1",
    outlineColor : "#666666",
    rollOverColor : "#9EC2F7",
    rollOverOutlineColor : "#000000"
    }
  });