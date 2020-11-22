const UPLOAD_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 20C16 19.4477 16.4477 19 17 19H20V4H4V19H7C7.55228 19 8 19.4477 8 20C8 20.5523 7.55228 21 7 21H3C2.44772 21 2 20.5523 2 20V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44771 22 3V20C22 20.5523 21.5523 21 21 21H17C16.4477 21 16 20.5523 16 20Z" fill="#050038"/><path d="M11 21.5V11.9142L9.41421 13.5C9.02369 13.8905 8.39052 13.8905 8 13.5C7.60948 13.1095 7.60948 12.4763 8 12.0858L12 8.08579L16 12.0858C16.3905 12.4763 16.3905 13.1095 16 13.5C15.6095 13.8905 14.9763 13.8905 14.5858 13.5L13 11.9142V21.5C13 22.0523 12.5523 22.5 12 22.5C11.4477 22.5 11 22.0523 11 21.5Z" fill="#050038"/></svg>'
const OPEN_ITEM_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5V17H20V14C20 13.4477 20.4477 13 21 13C21.5523 13 22 13.4477 22 14V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H4Z" fill="#050038"/><path d="M20.0093 6.40496L20 8.99643C19.998 9.54871 20.4442 9.99802 20.9964 9.99999C21.5487 10.002 21.998 9.55585 22 9.00357L22.0214 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H18.5858L12.2929 11.2929C11.9024 11.6834 11.9024 12.3166 12.2929 12.7071C12.6834 13.0976 13.3166 13.0976 13.7071 12.7071L20.0093 6.40496Z" fill="#050038"/><path d="M6 21C6 20.4477 6.44772 20 7 20H17C17.5523 20 18 20.4477 18 21C18 21.5523 17.5523 22 17 22H7C6.44771 22 6 21.5523 6 21Z" fill="#050038"/></svg>'
const CODEBEAMER_ICON = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="27.000000pt" eight="26.000000pt" viewBox="0 0 27.000000 26.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)" fill="#050038" stroke="none"><path d="M102 250 c-99 -23 -129 -149 -51 -214 61 -51 160 -32 193 38 20 43 20 69 0 112 -24 49 -98 87 -87 44 3 -11 14 -20 24 -20 28 0 35 -22 11 -38 -12 -8 -22 -21 -22 -29 0 -11 -7 -13 -25 -9 -30 8 -34 -10 -5 -19 25 -8 26 -42 3 -49 -10 -2 -2 -4 17 -3 30 2 36 6 40 32 5 25 7 27 13 11 5 -12 1 -28 -8 -42 -23 -36 -79 -33 -115 5 -19 21 -30 27 -38 19 -13 -13 -32 -2 -32 18 0 8 10 14 25 14 17 0 28 7 34 23 5 13 16 29 25 36 9 7 13 17 10 22 -3 5 2 16 10 25 13 13 23 37 14 33 -2 -1 -18 -5 -36 -9z"/></g></svg>'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'CodeBeamer Sync',
        svgIcon: CODEBEAMER_ICON,
        onClick: syncWithCodeBeamer,
      },
      toolbar: {
        title: "codeBeamer<->Miro Settings",
        librarySvgIcon: CODEBEAMER_ICON,
        toolbarSvgIcon: CODEBEAMER_ICON,
        onClick: async () => {
          let returnval = await miro.board.ui.openModal('src/settings.html')
          console.log(JSON.stringify(returnval))
        },
      },
      getWidgetMenuItems: function (selectedWidgets) {
        var menuItems = []
        if (isSelectionConvertable(selectedWidgets))
          menuItems.push(
            {
              tooltip: "Convert to codeBeamer Item",
              svgIcon: UPLOAD_ICON,
              onClick: () => submitNewCodeBeamerItem(selectedWidgets[0]),
            })
        // if (isSelectionOpenable(selectedWidgets))
        //   menuItems.push(
        //     {
        //       tooltip: "Open in CodeBeamer",
        //       svgIcon: OPEN_ITEM_ICON,
        //       onClick: () => openInCodeBeamer(selectedWidgets),
        //     })
        return menuItems
      },
    }
  })
  onAllWidgetsLoaded(async () => {
    let settingsWidget = await CreateOrHideSettingsWidget()
    console.log(`codebeamer-miro settings are now hidden: ${settingsWidget.id}`)
  })
})