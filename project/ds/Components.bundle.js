// Components bundle — 11 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 16215:17327 Ratio/Vertical (4 variants)
const __venc_RatioVertical2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RatioVertical2 = p => "ratio=" + __venc_RatioVertical2(p.ratio);
function RatioVertical2(_p = {}) {
  const props = {
    ..._p,
    ratio: _p.ratio ?? "1:1"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 100,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.943,-0.333,0.333,0.943,0,14.645)",
      transformOrigin: "0 0",
      height: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 100,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Ratio")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 100,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.999,-0.044,0.044,0.999,0,1.588)",
      transformOrigin: "0 0",
      height: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 100,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Ratio")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 100,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 100,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Ratio"));
  const __impls = {
    // figma: Ratio=1:1
    "ratio=1:1": __body0,
    // figma: Ratio=3:4
    "ratio=3:4": __body1,
    // figma: Ratio=2:3
    "ratio=2:3": __body2,
    // figma: Ratio=1:2
    "ratio=1:2": __body2
  };
  return (__impls[__vkey_RatioVertical2(props)] ?? __body0)();
}

// figma node: 16215:24960 Circular/Circular (2 variants)
const __venc_CircularCircular = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CircularCircular = p => "animate=" + __venc_CircularCircular(p.animate);
function CircularCircular(_p = {}) {
  const props = {
    ..._p,
    animate: _p.animate ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      color: "var(--line-solid-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical2, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 1.5 C 12.5 0.672 13.172 0 14 0 C 16.769 0 19.476 0.821 21.778 2.359 C 24.08 3.898 25.875 6.084 26.934 8.642 C 27.994 11.201 28.271 14.016 27.731 16.731 C 27.191 19.447 25.857 21.942 23.9 23.899 C 21.942 25.857 19.447 27.191 16.731 27.731 C 14.016 28.271 11.201 27.994 8.642 26.934 C 6.084 25.875 3.898 24.08 2.359 21.778 C 0.821 19.476 0 16.769 0 14 C 0 13.172 0.672 12.5 1.5 12.5 C 2.328 12.5 3 13.172 3 14 C 3 16.176 3.645 18.302 4.854 20.111 C 6.063 21.92 7.781 23.33 9.791 24.163 C 11.801 24.995 14.012 25.213 16.146 24.789 C 18.28 24.364 20.24 23.317 21.778 21.778 C 23.317 20.24 24.364 18.28 24.789 16.146 C 25.213 14.012 24.995 11.8 24.163 9.79 C 23.33 7.78 21.92 6.063 20.111 4.854 C 18.302 3.645 16.176 3 14 3 C 13.172 3 12.5 2.328 12.5 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical2, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-5cf346b40b08398c",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 28
    }
  })));
  const __impls = {
    // figma:  Animate=False
    "animate=false": __body0,
    // figma:  Animate=True
    "animate=true": __body1
  };
  return (__impls[__vkey_CircularCircular(props)] ?? __body0)();
}

// figma node: 16215:13728 Icon/Normal/!Blank (1 variants)
const __venc_IconNormalBlank3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconNormalBlank3 = p => "name=" + __venc_IconNormalBlank3(p.name);
function IconNormalBlank3(_p = {}) {
  const props = {
    ..._p,
    name: _p.name ?? "blank"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      color: "var(--label-normal-4)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical2, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Name=blank
    "name=blank": __body0
  };
  return (__impls[__vkey_IconNormalBlank3(props)] ?? __body0)();
}

// figma node: 16215:25199 Icons/Icons (1 variants)
const __venc_IconsIcons = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconsIcons = p => "prop=" + __venc_IconsIcons(p.prop);
function IconsIcons(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "null"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(IconNormalBlank3, {
    name: "blank"
  })));
  const __impls = {
    // figma: -=Null
    "prop=null": __body0
  };
  return (__impls[__vkey_IconsIcons(props)] ?? __body0)();
}

// figma node: 16215:17261 Interaction/Light (4 variants)
const __venc_InteractionLight = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_InteractionLight = p => "state=" + __venc_InteractionLight(p.state);
function InteractionLight(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "normal"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.038,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.06,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.09,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: State=Normal
    "state=normal": __body0,
    // figma: State=Hovered
    "state=hovered": __body1,
    // figma: State=Focused
    "state=focused": __body2,
    // figma: State=Pressed
    "state=pressed": __body3
  };
  return (__impls[__vkey_InteractionLight(props)] ?? __body0)();
}

// figma node: 16215:17256 Interaction/Normal (4 variants)
const __venc_InteractionNormal = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_InteractionNormal = p => "state=" + __venc_InteractionNormal(p.state);
function InteractionNormal(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "normal"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.05,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.08,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.12,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: State=Normal
    "state=normal": __body0,
    // figma: State=Hovered
    "state=hovered": __body1,
    // figma: State=Focused
    "state=focused": __body2,
    // figma: State=Pressed
    "state=pressed": __body3
  };
  return (__impls[__vkey_InteractionNormal(props)] ?? __body0)();
}

// figma node: 16215:17266 Interaction/Strong (4 variants)
const __venc_InteractionStrong = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_InteractionStrong = p => "state=" + __venc_InteractionStrong(p.state);
function InteractionStrong(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "normal"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.075,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.12,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      opacity: 0.18,
      overflow: "hidden",
      backgroundColor: "var(--label-normal-4)",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: State=Normal
    "state=normal": __body0,
    // figma: State=Hovered
    "state=hovered": __body1,
    // figma: State=Focused
    "state=focused": __body2,
    // figma: State=Pressed
    "state=pressed": __body3
  };
  return (__impls[__vkey_InteractionStrong(props)] ?? __body0)();
}

// figma node: 16215:37602 Button/Button (48 variants)
const __venc_ButtonButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ButtonButton = p => "variant=" + __venc_ButtonButton(p.variant) + '|' + "disable=" + __venc_ButtonButton(p.disable) + '|' + "color=" + __venc_ButtonButton(p.color) + '|' + "iconOnly=" + __venc_ButtonButton(p.iconOnly) + '|' + "size=" + __venc_ButtonButton(p.size);
function ButtonButton(_p = {}) {
  const props = {
    ..._p,
    loading: _p.loading ?? false,
    label: _p.label ?? "텍스트",
    leadingIcon: _p.leadingIcon ?? false,
    variant: _p.variant ?? "solid",
    disable: _p.disable ?? false,
    color: _p.color ?? "primary",
    trailingIcon: _p.trailingIcon ?? false,
    iconOnly: _p.iconOnly ?? false,
    size: _p.size ?? "sm"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--primary-normal-3)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "var(--static-white-3)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48
    }
  }, /*#__PURE__*/React.createElement(InteractionStrong, {
    style: {
      transform: "scale(1.531, 0.750)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "rgba(55,56,60,0.28)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-normal-3)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 22,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--static-white-3)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(InteractionStrong, {
    style: {
      transform: "scale(1.250, 0.625)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.28)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-normal-3)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "var(--static-white-3)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal",
    style: {
      transform: "scale(0.984, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(55,56,60,0.28)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--primary-normal-3)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.143,
      height: 48
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal",
    style: {
      transform: "scale(0.643, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-normal-3)",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 20,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 30.769,
      height: 40
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal",
    style: {
      transform: "scale(0.481, 0.625)",
      transformOrigin: "0 0"
    }
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 20,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-normal-3)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 18,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.261,
      height: 32
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal",
    style: {
      transform: "scale(0.348, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 18,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backdropFilter: "blur(64px)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48,
      backgroundColor: "rgba(112,115,124,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "rgba(46,47,51,0.88)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48
    }
  }, /*#__PURE__*/React.createElement(InteractionNormal, {
    style: {
      transform: "scale(1.531, 0.750)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "rgba(55,56,60,0.28)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backdropFilter: "blur(64px)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40,
      backgroundColor: "rgba(112,115,124,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 22,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(46,47,51,0.88)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(InteractionNormal, {
    style: {
      transform: "scale(1.250, 0.625)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.28)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backdropFilter: "blur(64px)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32,
      backgroundColor: "rgba(112,115,124,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(46,47,51,0.88)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal",
    style: {
      transform: "scale(0.984, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--interaction-disable)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(55,56,60,0.28)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backdropFilter: "blur(64px)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48,
      backgroundColor: "rgba(112,115,124,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.143,
      height: 48
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal",
    style: {
      transform: "scale(0.643, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backdropFilter: "blur(64px)",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "rgba(112,115,124,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 20,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal",
    style: {
      transform: "scale(0.625, 0.625)",
      transformOrigin: "0 0"
    }
  }))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backdropFilter: "blur(64px)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      backgroundColor: "rgba(112,115,124,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--static-white-3)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 18,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal",
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "var(--primary-normal-3)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48
    }
  }, /*#__PURE__*/React.createElement(InteractionLight, {
    style: {
      transform: "scale(1.531, 0.750)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 22,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--primary-normal-3)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(InteractionLight, {
    style: {
      transform: "scale(1.250, 0.625)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "var(--primary-normal-3)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal",
    style: {
      transform: "scale(0.984, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.143,
      height: 48
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal",
    style: {
      transform: "scale(0.643, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 20,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal",
    style: {
      transform: "scale(0.625, 0.625)",
      transformOrigin: "0 0"
    }
  }))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 20,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 18,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal",
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 18,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 24,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "var(--label-normal-4)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98,
      height: 48
    }
  }, /*#__PURE__*/React.createElement(InteractionLight, {
    style: {
      transform: "scale(1.531, 0.750)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 28px 12px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.006em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 22,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--label-normal-4)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(InteractionLight, {
    style: {
      transform: "scale(1.250, 0.625)",
      transformOrigin: "0 0"
    },
    state: "normal"
  }))));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "9px 20px 9px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "var(--label-normal-4)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60.505,
      height: 32
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal",
    style: {
      transform: "scale(0.945, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0
    }
  }, props.label), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))))));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "column",
      padding: "7px 7px 7px 7px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CircularCircular, {
    animate: false
  }))), props.loading && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 18,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.261,
      height: 32
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal",
    style: {
      transform: "scale(0.348, 0.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __impls = {
    // figma: Variant=Solid, Color=Primary, Size=Large, Icon Only=False, Disable=False
    "variant=solid|disable=false|color=primary|iconOnly=false|size=lg": __body0,
    // figma: Variant=Solid, Color=Primary, Size=Large, Icon Only=False, Disable=True
    "variant=solid|disable=true|color=primary|iconOnly=false|size=lg": __body1,
    // figma: Variant=Solid, Color=Primary, Size=Medium, Icon Only=False, Disable=False
    "variant=solid|disable=false|color=primary|iconOnly=false|size=md": __body2,
    // figma: Variant=Solid, Color=Primary, Size=Medium, Icon Only=False, Disable=True
    "variant=solid|disable=true|color=primary|iconOnly=false|size=md": __body3,
    // figma: Variant=Solid, Color=Primary, Size=Small, Icon Only=False, Disable=False
    "variant=solid|disable=false|color=primary|iconOnly=false|size=sm": __body4,
    // figma: Variant=Solid, Color=Primary, Size=Small, Icon Only=False, Disable=True
    "variant=solid|disable=true|color=primary|iconOnly=false|size=sm": __body5,
    // figma: Variant=Solid, Color=Primary, Size=Large, Icon Only=True, Disable=False
    "variant=solid|disable=false|color=primary|iconOnly=true|size=lg": __body6,
    // figma: Variant=Solid, Color=Primary, Size=Large, Icon Only=True, Disable=True
    "variant=solid|disable=true|color=primary|iconOnly=true|size=lg": __body7,
    // figma: Variant=Solid, Color=Primary, Size=Medium, Icon Only=True, Disable=False
    "variant=solid|disable=false|color=primary|iconOnly=true|size=md": __body8,
    // figma: Variant=Solid, Color=Primary, Size=Medium, Icon Only=True, Disable=True
    "variant=solid|disable=true|color=primary|iconOnly=true|size=md": __body9,
    // figma: Variant=Solid, Color=Primary, Size=Small, Icon Only=True, Disable=False
    "variant=solid|disable=false|color=primary|iconOnly=true|size=sm": __body10,
    // figma: Variant=Solid, Color=Primary, Size=Small, Icon Only=True, Disable=True
    "variant=solid|disable=true|color=primary|iconOnly=true|size=sm": __body11,
    // figma: Variant=Solid, Color=Assistive, Size=Large, Icon Only=False, Disable=False
    "variant=solid|disable=false|color=assistive|iconOnly=false|size=lg": __body12,
    // figma: Variant=Solid, Color=Assistive, Size=Large, Icon Only=False, Disable=True
    "variant=solid|disable=true|color=assistive|iconOnly=false|size=lg": __body13,
    // figma: Variant=Solid, Color=Assistive, Size=Medium, Icon Only=False, Disable=False
    "variant=solid|disable=false|color=assistive|iconOnly=false|size=md": __body14,
    // figma: Variant=Solid, Color=Assistive, Size=Medium, Icon Only=False, Disable=True
    "variant=solid|disable=true|color=assistive|iconOnly=false|size=md": __body15,
    // figma: Variant=Solid, Color=Assistive, Size=Small, Icon Only=False, Disable=False
    "variant=solid|disable=false|color=assistive|iconOnly=false|size=sm": __body16,
    // figma: Variant=Solid, Color=Assistive, Size=Small, Icon Only=False, Disable=True
    "variant=solid|disable=true|color=assistive|iconOnly=false|size=sm": __body17,
    // figma: Variant=Solid, Color=Assistive, Size=Large, Icon Only=True, Disable=False
    "variant=solid|disable=false|color=assistive|iconOnly=true|size=lg": __body18,
    // figma: Variant=Solid, Color=Assistive, Size=Large, Icon Only=True, Disable=True
    "variant=solid|disable=true|color=assistive|iconOnly=true|size=lg": __body7,
    // figma: Variant=Solid, Color=Assistive, Size=Medium, Icon Only=True, Disable=False
    "variant=solid|disable=false|color=assistive|iconOnly=true|size=md": __body19,
    // figma: Variant=Solid, Color=Assistive, Size=Medium, Icon Only=True, Disable=True
    "variant=solid|disable=true|color=assistive|iconOnly=true|size=md": __body9,
    // figma: Variant=Solid, Color=Assistive, Size=Small, Icon Only=True, Disable=False
    "variant=solid|disable=false|color=assistive|iconOnly=true|size=sm": __body20,
    // figma: Variant=Solid, Color=Assistive, Size=Small, Icon Only=True, Disable=True
    "variant=solid|disable=true|color=assistive|iconOnly=true|size=sm": __body11,
    // figma: Variant=Outlined, Color=Primary, Size=Large, Icon Only=False, Disable=False
    "variant=outlined|disable=false|color=primary|iconOnly=false|size=lg": __body21,
    // figma: Variant=Outlined, Color=Primary, Size=Large, Icon Only=False, Disable=True
    "variant=outlined|disable=true|color=primary|iconOnly=false|size=lg": __body22,
    // figma: Variant=Outlined, Color=Primary, Size=Medium, Icon Only=False, Disable=False
    "variant=outlined|disable=false|color=primary|iconOnly=false|size=md": __body23,
    // figma: Variant=Outlined, Color=Primary, Size=Medium, Icon Only=False, Disable=True
    "variant=outlined|disable=true|color=primary|iconOnly=false|size=md": __body24,
    // figma: Variant=Outlined, Color=Primary, Size=Small, Icon Only=False, Disable=False
    "variant=outlined|disable=false|color=primary|iconOnly=false|size=sm": __body25,
    // figma: Variant=Outlined, Color=Primary, Size=Small, Icon Only=False, Disable=True
    "variant=outlined|disable=true|color=primary|iconOnly=false|size=sm": __body26,
    // figma: Variant=Outlined, Color=Primary, Size=Large, Icon Only=True, Disable=False
    "variant=outlined|disable=false|color=primary|iconOnly=true|size=lg": __body27,
    // figma: Variant=Outlined, Color=Primary, Size=Large, Icon Only=True, Disable=True
    "variant=outlined|disable=true|color=primary|iconOnly=true|size=lg": __body28,
    // figma: Variant=Outlined, Color=Primary, Size=Medium, Icon Only=True, Disable=False
    "variant=outlined|disable=false|color=primary|iconOnly=true|size=md": __body29,
    // figma: Variant=Outlined, Color=Primary, Size=Medium, Icon Only=True, Disable=True
    "variant=outlined|disable=true|color=primary|iconOnly=true|size=md": __body30,
    // figma: Variant=Outlined, Color=Primary, Size=Small, Icon Only=True, Disable=False
    "variant=outlined|disable=false|color=primary|iconOnly=true|size=sm": __body31,
    // figma: Variant=Outlined, Color=Primary, Size=Small, Icon Only=True, Disable=True
    "variant=outlined|disable=true|color=primary|iconOnly=true|size=sm": __body32,
    // figma: Variant=Outlined, Color=Assistive, Size=Large, Icon Only=False, Disable=False
    "variant=outlined|disable=false|color=assistive|iconOnly=false|size=lg": __body33,
    // figma: Variant=Outlined, Color=Assistive, Size=Large, Icon Only=False, Disable=True
    "variant=outlined|disable=true|color=assistive|iconOnly=false|size=lg": __body34,
    // figma: Variant=Outlined, Color=Assistive, Size=Medium, Icon Only=False, Disable=False
    "variant=outlined|disable=false|color=assistive|iconOnly=false|size=md": __body35,
    // figma: Variant=Outlined, Color=Assistive, Size=Medium, Icon Only=False, Disable=True
    "variant=outlined|disable=true|color=assistive|iconOnly=false|size=md": __body36,
    // figma: Variant=Outlined, Color=Assistive, Size=Small, Icon Only=False, Disable=False
    "variant=outlined|disable=false|color=assistive|iconOnly=false|size=sm": __body37,
    // figma: Variant=Outlined, Color=Assistive, Size=Small, Icon Only=False, Disable=True
    "variant=outlined|disable=true|color=assistive|iconOnly=false|size=sm": __body38,
    // figma: Variant=Outlined, Color=Assistive, Size=Large, Icon Only=True, Disable=False
    "variant=outlined|disable=false|color=assistive|iconOnly=true|size=lg": __body27,
    // figma: Variant=Outlined, Color=Assistive, Size=Large, Icon Only=True, Disable=True
    "variant=outlined|disable=true|color=assistive|iconOnly=true|size=lg": __body28,
    // figma: Variant=Outlined, Color=Assistive, Size=Medium, Icon Only=True, Disable=False
    "variant=outlined|disable=false|color=assistive|iconOnly=true|size=md": __body29,
    // figma: Variant=Outlined, Color=Assistive, Size=Medium, Icon Only=True, Disable=True
    "variant=outlined|disable=true|color=assistive|iconOnly=true|size=md": __body30,
    // figma: Variant=Outlined, Color=Assistive, Size=Small, Icon Only=True, Disable=False
    "variant=outlined|disable=false|color=assistive|iconOnly=true|size=sm": __body39,
    // figma: Variant=Outlined, Color=Assistive, Size=Small, Icon Only=True, Disable=True
    "variant=outlined|disable=true|color=assistive|iconOnly=true|size=sm": __body32
  };
  return (__impls[__vkey_ButtonButton(props)] ?? __body4)();
}

// figma node: 16215:25365 Content Badge/Content Badge (12 variants)
const __venc_ContentBadgeContentBadge = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ContentBadgeContentBadge = p => "variant=" + __venc_ContentBadgeContentBadge(p.variant) + '|' + "size=" + __venc_ContentBadgeContentBadge(p.size) + '|' + "color=" + __venc_ContentBadgeContentBadge(p.color);
function ContentBadgeContentBadge(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "solid",
    size: _p.size ?? "md",
    color: _p.color ?? "neutral",
    trailingIcon: _p.trailingIcon ?? false,
    leadingIcon: _p.leadingIcon ?? false,
    text: _p.text ?? "텍스트"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(112,115,124,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(112,115,124,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: 1.2730000019073486,
      letterSpacing: "0.031em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgba(112,115,124,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: 1.2730000019073486,
      letterSpacing: "0.031em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 20,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      opacity: 0.08,
      borderRadius: 6,
      backgroundColor: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: 1.2730000019073486,
      letterSpacing: "0.031em",
      color: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      opacity: 0.08,
      borderRadius: 8,
      backgroundColor: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 51,
      height: 28,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      opacity: 0.08,
      borderRadius: 8,
      backgroundColor: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 42,
      height: 20,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 42 20",
    fill: "none",
    style: {
      position: "relative",
      opacity: 0.43,
      overflow: "hidden",
      borderRadius: 6,
      flexGrow: 1,
      alignSelf: "stretch",
      color: "var(--accent-foreground-cyan)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 36 0 C 39.314 0 42 2.686 42 6 L 42 14 C 42 17.314 39.314 20 36 20 L 6 20 C 2.686 20 0 17.314 0 14 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6 1 L 36 1 L 36 -1 L 6 -1 L 6 1 Z M 41 6 L 41 14 L 43 14 L 43 6 L 41 6 Z M 36 19 L 6 19 L 6 21 L 36 21 L 36 19 Z M 1 14 L 1 6 L -1 6 L -1 14 L 1 14 Z M 6 19 C 3.239 19 1 16.761 1 14 L -1 14 C -1 17.866 2.134 21 6 21 L 6 19 Z M 41 14 C 41 16.761 38.761 19 36 19 L 36 21 C 39.866 21 43 17.866 43 14 L 41 14 Z M 36 1 C 38.761 1 41 3.239 41 6 L 43 6 C 43 2.134 39.866 -1 36 -1 L 36 1 Z M 6 -1 C 2.134 -1 -1 2.134 -1 6 L 1 6 C 1 3.239 3.239 1 6 1 L 6 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: 1.2730000019073486,
      letterSpacing: "0.031em",
      color: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 24,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 44 24",
    fill: "none",
    style: {
      position: "relative",
      opacity: 0.43,
      overflow: "hidden",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch",
      color: "var(--accent-foreground-cyan)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 36 0 C 40.418 0 44 3.582 44 8 L 44 16 C 44 20.418 40.418 24 36 24 L 8 24 C 3.582 24 0 20.418 0 16 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 1 L 36 1 L 36 -1 L 8 -1 L 8 1 Z M 43 8 L 43 16 L 45 16 L 45 8 L 43 8 Z M 36 23 L 8 23 L 8 25 L 36 25 L 36 23 Z M 1 16 L 1 8 L -1 8 L -1 16 L 1 16 Z M 8 23 C 4.134 23 1 19.866 1 16 L -1 16 C -1 20.971 3.029 25 8 25 L 8 23 Z M 43 16 C 43 19.866 39.866 23 36 23 L 36 25 C 40.971 25 45 20.971 45 16 L 43 16 Z M 36 1 C 39.866 1 43 4.134 43 8 L 45 8 C 45 3.029 40.971 -1 36 -1 L 36 1 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 14,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 8px 5px 8px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 51,
      height: 28,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 51 28",
    fill: "none",
    style: {
      position: "relative",
      opacity: 0.43,
      overflow: "hidden",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch",
      color: "var(--accent-foreground-cyan)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 43 0 C 47.418 0 51 3.582 51 8 L 51 20 C 51 24.418 47.418 28 43 28 L 8 28 C 3.582 28 0 24.418 0 20 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 1 L 43 1 L 43 -1 L 8 -1 L 8 1 Z M 50 8 L 50 20 L 52 20 L 52 8 L 50 8 Z M 43 27 L 8 27 L 8 29 L 43 29 L 43 27 Z M 1 20 L 1 8 L -1 8 L -1 20 L 1 20 Z M 8 27 C 4.134 27 1 23.866 1 20 L -1 20 C -1 24.971 3.029 29 8 29 L 8 27 Z M 50 20 C 50 23.866 46.866 27 43 27 L 43 29 C 47.971 29 52 24.971 52 20 L 50 20 Z M 43 1 C 46.866 1 50 4.134 50 8 L 52 8 C 52 3.029 47.971 -1 43 -1 L 43 1 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.3849999904632568,
      letterSpacing: "0.019em",
      color: "var(--accent-foreground-cyan)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), props.trailingIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(RatioVertical2, {
    style: {
      position: "relative",
      width: 16,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3,
      color: "var(--label-normal-4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __impls = {
    // figma: Variant=Solid, Size=Small, Color=Neutral
    "variant=solid|size=sm|color=neutral": __body0,
    // figma: Variant=Solid, Size=XSmall, Color=Neutral
    "variant=solid|size=xs|color=neutral": __body1,
    // figma: Variant=Solid, Size=Medium, Color=Neutral
    "variant=solid|size=md|color=neutral": __body2,
    // figma: Variant=Outlined, Size=XSmall, Color=Neutral
    "variant=outlined|size=xs|color=neutral": __body3,
    // figma: Variant=Outlined, Size=Small, Color=Neutral
    "variant=outlined|size=sm|color=neutral": __body4,
    // figma: Variant=Outlined, Size=Medium, Color=Neutral
    "variant=outlined|size=md|color=neutral": __body5,
    // figma: Variant=Solid, Size=XSmall, Color=Accent
    "variant=solid|size=xs|color=accent": __body6,
    // figma: Variant=Solid, Size=Small, Color=Accent
    "variant=solid|size=sm|color=accent": __body7,
    // figma: Variant=Solid, Size=Medium, Color=Accent
    "variant=solid|size=md|color=accent": __body8,
    // figma: Variant=Outlined, Size=XSmall, Color=Accent
    "variant=outlined|size=xs|color=accent": __body9,
    // figma: Variant=Outlined, Size=Small, Color=Accent
    "variant=outlined|size=sm|color=accent": __body10,
    // figma: Variant=Outlined, Size=Medium, Color=Accent
    "variant=outlined|size=md|color=accent": __body11
  };
  return (__impls[__vkey_ContentBadgeContentBadge(props)] ?? __body2)();
}

// figma node: 16215:42078 Chip/Chip (24 variants)
const __venc_ChipChip = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ChipChip = p => "size=" + __venc_ChipChip(p.size) + '|' + "variant=" + __venc_ChipChip(p.variant) + '|' + "disable=" + __venc_ChipChip(p.disable) + '|' + "active=" + __venc_ChipChip(p.active);
function ChipChip(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "텍스트",
    trailingContent: _p.trailingContent ?? false,
    leadingContent: _p.leadingContent ?? false,
    size: _p.size ?? "xs",
    variant: _p.variant ?? "solid",
    disable: _p.disable ?? false,
    active: _p.active ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "7px 11px 7px 11px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "0.015em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 1px 0px 1px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      opacity: 0.05,
      borderRadius: 6,
      backgroundColor: "var(--primary-normal-3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      opacity: 0.43,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--primary-normal-3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 1px 0px 1px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "var(--primary-normal-3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      opacity: 0.05,
      borderRadius: 10,
      backgroundColor: "var(--primary-normal-3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      opacity: 0.43,
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px var(--primary-normal-3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--primary-normal-3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "7px 11px 7px 11px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      opacity: 0.05,
      borderRadius: 10,
      backgroundColor: "var(--primary-normal-3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      opacity: 0.43,
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px var(--primary-normal-3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--primary-normal-3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      opacity: 0.05,
      borderRadius: 8,
      backgroundColor: "var(--primary-normal-3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      opacity: 0.43,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--primary-normal-3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "0.015em",
      color: "var(--primary-normal-3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionNormal, {
    state: "normal"
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 1px 0px 1px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "7px 11px 7px 11px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      borderRadius: 10,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgba(112,115,124,0.16)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "0.015em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      borderRadius: 6,
      backgroundColor: "var(--interaction-disable)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 1px 0px 1px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      overflow: "hidden",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      borderRadius: 10,
      backgroundColor: "var(--interaction-disable)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "7px 11px 7px 11px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      overflow: "hidden",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      borderRadius: 10,
      backgroundColor: "var(--interaction-disable)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      overflow: "hidden",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--interaction-disable)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "0.015em",
      color: "rgba(55,56,60,0.16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      borderRadius: 6,
      backgroundColor: "var(--label-strong-2)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 1px 0px 1px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "var(--inverse-label-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal"
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      borderRadius: 10,
      backgroundColor: "var(--label-strong-2)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--inverse-label-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal"
  }))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "7px 11px 7px 11px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      borderRadius: 10,
      backgroundColor: "var(--label-strong-2)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "var(--inverse-label-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal"
  }))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--label-strong-2)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "0.015em",
      color: "var(--inverse-label-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionStrong, {
    state: "normal"
  }))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      borderRadius: 10,
      backgroundColor: "rgba(112,115,124,0.05)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68,
      height: 40,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgba(112,115,124,0.05)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "0.015em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      borderRadius: 6,
      backgroundColor: "rgba(112,115,124,0.05)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 1px 0px 1px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.3339999914169312,
      letterSpacing: "0.025em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      display: "flex",
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      padding: "7px 11px 7px 11px",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      borderRadius: 10,
      backgroundColor: "rgba(112,115,124,0.05)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.leadingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance2 ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Pretendard JP\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "0.010em",
      color: "rgba(55,56,60,0.61)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text)), props.trailingContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(IconsIcons, {
    prop: "null"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 36,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InteractionLight, {
    state: "normal"
  }))));
  const __impls = {
    // figma: Size=Large, Variant=Outlined, Disable=True, Active=False
    "size=lg|variant=outlined|disable=true|active=false": __body0,
    // figma: Size=Medium, Variant=Outlined, Disable=True, Active=True
    "size=md|variant=outlined|disable=true|active=true": __body1,
    // figma: Size=Small, Variant=Outlined, Disable=True, Active=True
    "size=sm|variant=outlined|disable=true|active=true": __body2,
    // figma: Size=XSmall, Variant=Outlined, Disable=True, Active=True
    "size=xs|variant=outlined|disable=true|active=true": __body3,
    // figma: Size=XSmall, Variant=Outlined, Disable=False, Active=True
    "size=xs|variant=outlined|disable=false|active=true": __body4,
    // figma: Size=Large, Variant=Outlined, Disable=False, Active=True
    "size=lg|variant=outlined|disable=false|active=true": __body5,
    // figma: Size=Medium, Variant=Outlined, Disable=False, Active=True
    "size=md|variant=outlined|disable=false|active=true": __body6,
    // figma: Size=Small, Variant=Outlined, Disable=False, Active=True
    "size=sm|variant=outlined|disable=false|active=true": __body7,
    // figma: Size=XSmall, Variant=Outlined, Disable=False, Active=False
    "size=xs|variant=outlined|disable=false|active=false": __body8,
    // figma: Size=Large, Variant=Outlined, Disable=False, Active=False
    "size=lg|variant=outlined|disable=false|active=false": __body9,
    // figma: Size=Medium, Variant=Outlined, Disable=False, Active=False
    "size=md|variant=outlined|disable=false|active=false": __body10,
    // figma: Size=Small, Variant=Outlined, Disable=False, Active=False
    "size=sm|variant=outlined|disable=false|active=false": __body11,
    // figma: Size=XSmall, Variant=Solid, Disable=True, Active=True
    "size=xs|variant=solid|disable=true|active=true": __body12,
    // figma: Size=Large, Variant=Solid, Disable=True, Active=False
    "size=lg|variant=solid|disable=true|active=false": __body13,
    // figma: Size=Medium, Variant=Solid, Disable=True, Active=True
    "size=md|variant=solid|disable=true|active=true": __body14,
    // figma: Size=Small, Variant=Solid, Disable=True, Active=True
    "size=sm|variant=solid|disable=true|active=true": __body15,
    // figma: Size=XSmall, Variant=Solid, Disable=False, Active=True
    "size=xs|variant=solid|disable=false|active=true": __body16,
    // figma: Size=Large, Variant=Solid, Disable=False, Active=True
    "size=lg|variant=solid|disable=false|active=true": __body17,
    // figma: Size=Medium, Variant=Solid, Disable=False, Active=True
    "size=md|variant=solid|disable=false|active=true": __body18,
    // figma: Size=Small, Variant=Solid, Disable=False, Active=True
    "size=sm|variant=solid|disable=false|active=true": __body19,
    // figma: Size=Large, Variant=Solid, Disable=False, Active=False
    "size=lg|variant=solid|disable=false|active=false": __body20,
    // figma: Size=Small, Variant=Solid, Disable=False, Active=False
    "size=sm|variant=solid|disable=false|active=false": __body21,
    // figma: Size=XSmall, Variant=Solid, Disable=False, Active=False
    "size=xs|variant=solid|disable=false|active=false": __body22,
    // figma: Size=Medium, Variant=Solid, Disable=False, Active=False
    "size=md|variant=solid|disable=false|active=false": __body23
  };
  return (__impls[__vkey_ChipChip(props)] ?? __body22)();
}

// figma node: 137:460 Control/.Switch (8 variants)
const __venc_ControlSwitch = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ControlSwitch = p => "active=" + __venc_ControlSwitch(p.active) + '|' + "disable=" + __venc_ControlSwitch(p.disable) + '|' + "size=" + __venc_ControlSwitch(p.size);
function ControlSwitch(_p = {}) {
  const props = {
    ..._p,
    active: _p.active ?? false,
    disable: _p.disable ?? false,
    size: _p.size ?? "md"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1000,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(51,102,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1000,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.43,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1000,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.43,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(51,102,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1000,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 75,
      backgroundColor: "rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 7.5,
      padding: "3px 3px 3px 3px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 750,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 4.029 4.029 0 9 0 L 9 0 C 13.971 0 18 4.029 18 9 L 18 9 C 18 13.971 13.971 18 9 18 L 9 18 C 4.029 18 0 13.971 0 9 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 75,
      backgroundColor: "rgb(51,102,255)",
      display: "flex",
      flexDirection: "row",
      gap: 7.5,
      padding: "3px 3px 3px 3px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 750,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 4.029 4.029 0 9 0 L 9 0 C 13.971 0 18 4.029 18 9 L 18 9 C 18 13.971 13.971 18 9 18 L 9 18 C 4.029 18 0 13.971 0 9 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.43,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 75,
      backgroundColor: "rgba(112,115,124,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 7.5,
      padding: "3px 3px 3px 3px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 750,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 4.029 4.029 0 9 0 L 9 0 C 13.971 0 18 4.029 18 9 L 18 9 C 18 13.971 13.971 18 9 18 L 9 18 C 4.029 18 0 13.971 0 9 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.43,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 75,
      backgroundColor: "rgb(51,102,255)",
      display: "flex",
      flexDirection: "row",
      gap: 7.5,
      padding: "3px 3px 3px 3px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 750,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 4.029 4.029 0 9 0 L 9 0 C 13.971 0 18 4.029 18 9 L 18 9 C 18 13.971 13.971 18 9 18 L 9 18 C 4.029 18 0 13.971 0 9 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Active=False, Disable=False, Size=Medium
    "active=false|disable=false|size=md": __body0,
    // figma: Active=True, Disable=False, Size=Medium
    "active=true|disable=false|size=md": __body1,
    // figma: Active=False, Disable=True, Size=Medium
    "active=false|disable=true|size=md": __body2,
    // figma: Active=True, Disable=True, Size=Medium
    "active=true|disable=true|size=md": __body3,
    // figma: Active=False, Disable=False, Size=Small
    "active=false|disable=false|size=sm": __body4,
    // figma: Active=True, Disable=False, Size=Small
    "active=true|disable=false|size=sm": __body5,
    // figma: Active=False, Disable=True, Size=Small
    "active=false|disable=true|size=sm": __body6,
    // figma: Active=True, Disable=True, Size=Small
    "active=true|disable=true|size=sm": __body7
  };
  return (__impls[__vkey_ControlSwitch(props)] ?? __body0)();
}

// Globals for scripts loaded after this file.
window.RatioVertical2 = RatioVertical2;
window.CircularCircular = CircularCircular;
window.IconNormalBlank3 = IconNormalBlank3;
window.IconsIcons = IconsIcons;
window.InteractionLight = InteractionLight;
window.InteractionNormal = InteractionNormal;
window.InteractionStrong = InteractionStrong;
window.ButtonButton = ButtonButton;
window.ContentBadgeContentBadge = ContentBadgeContentBadge;
window.ChipChip = ChipChip;
window.ControlSwitch = ControlSwitch;