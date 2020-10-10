PSD.open('path/to/file.psd').then((psd) => {
  return psd.image.saveAsPng('../access/移动端(英语）.psd')
  console.log(psd)
}).then(() => {
  console.log('Finished!')
})


let parseRes = {
  children:
    [
      {
        type: 'layer',
        visible: true,
        opacity: 1,
        blendingMode: 'normal',
        name: '超强词汇记忆法',
        left: 324,
        right: 629,
        top: 150,
        bottom: 246,
        height: 96,
        width: 305,
        mask: {},
        text: [Object],
        image: {}
      },
      {
        type: 'layer',
        visible: true,
        opacity: 0.5019607843137255,
        blendingMode: 'normal',
        name: '【英语】',
        left: 334,
        right: 461,
        top: 101,
        bottom: 139,
        height: 38,
        width: 127,
        mask: {},
        text: [Object],
        image: {}
      },
      {
        type: 'layer',
        visible: true,
        opacity: 1,
        blendingMode: 'normal',
        name: '背景',
        left: 0,
        right: 1035,
        top: 0,
        bottom: 360,
        height: 360,
        width: 1035,
        mask: {},
        text: undefined,
        image: {}
      }
    ],
  document:
    {
      width: 1035,
      height: 360,
      resources: {
        layerComps: [],
        guides: [],
        slices: []
      }
    }
}
