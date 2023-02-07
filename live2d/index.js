L2Dwidget.init({
  model: {
    jsonPath:
      "https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json",
    scale: 1,
  },
  display: {
    position: "left", //ģ�͵ı���λ��
    width: 150, //ģ�͵Ŀ���
    height: 300, //ģ�͵ĸ߶�
    hOffset: -50, // ��������ƫ��
    vOffset: -150, // ��������ƫ��, ������������Լ�������ֵ
  },
  mobile: {
    show: false, // �ֻ��˲���ʾ
    scale: 0.5,
  },
  react: {
    opacityDefault: 1, //ģ��Ĭ��͸����
    opacityOnHover: 0.2,
  },
});
