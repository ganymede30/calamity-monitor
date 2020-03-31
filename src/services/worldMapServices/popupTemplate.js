export const worldPopupTemplate = {
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
        // {
        //   fieldName: "recovered",
        //   label: "Recovered",
        //   visible: true
        // },
        {
          fieldName: "deaths",
          label: "Deaths",
          visible: true
        }
      ]
    }
  ]
}

export const usPopupTemplate = {
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
          fieldName: "state",
          label: "State",
          visible: true
        },
        {
          fieldName: "county",
          label: "County",
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
        // {
        //   fieldName: "recovered",
        //   label: "Recovered",
        //   visible: true
        // },
        {
          fieldName: "deaths",
          label: "Deaths",
          visible: true
        }
      ]
    }
  ]
}

export const choroplethPopupTemplate = {
  // autocasts as new PopupTemplate()
  title: "COVID-19",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "COUNTRY",
          label: "Country",
          visible: true
        },
        {
          fieldName: "Date",
          label: "Last Updated",
          visible: true
        },
        {
          fieldName: "number_of_cases",
          label: "Confirmed Cases",
          visible: true
        },
        // {
        //   fieldName: "recovered",
        //   label: "Recovered",
        //   visible: true
        // },
        {
          fieldName: "number_of_deaths",
          label: "Deaths",
          visible: true
        }
      ]
    }
  ]
}

