export const popupTemplateCovid19 = {
  // autocasts as new PopupTemplate()
  title: "COVID-19",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "country",
          label: "Country",
          visible: true
        },
        {
          fieldName: "province",
          label: "Province",
          visible: true
        },
        {
          fieldName: "last_updated",
          label: "Last Updated",
          visible: true
        },
        {
          fieldName: "confirmed_cases",
          label: "Confirmed Cases",
          visible: true
        },
        {
          fieldName: "recovered",
          label: "Recovered",
          visible: true
        },
        {
          fieldName: "deaths",
          label: "Deaths",
          visible: true
        }
      ]
    }
  ]
}
