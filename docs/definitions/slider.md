# Slider

variants:

- percentage: number 0 - 100
- state: idle, hover, focus, active

## 0, idle

```
<div data-layer="Percentage=0, State=Idle" class="percentage0-stateidle">
  <div data-layer="Mask" class="mask"></div>
  <div data-layer="Mask" class="mask_01"></div>
  <div data-layer="Rectangle" class="rectangle"></div>
  <div data-layer="Oval" class="oval"></div>
  <div data-layer="Oval" class="oval_01"></div>
  <div data-layer="Label" class="label">
    <div data-layer="Tooltips / Popover" data-property-1="Default" class="tooltips-popover">
      <div data-layer="Rectangle" class="rectangle_01"></div>
      <div data-layer="Popover" class="popover"><span class="popover_span">1,500 USD</span></div>
    </div>
  </div>
  <div data-layer="Frame 5124" class="frame-5124">
    <div data-layer="Label Slider" data-show-divider="true" data-show-point="true" data-show-value-1="true" class="label-slider">
      <div data-layer="Airline (app)" class="airline-app">
        <div data-layer="Shape" class="shape"></div>
      </div>
      <div data-layer="Frame 5307" class="frame-5307">
        <div data-layer="Upper Label"><span class="upperlabel_span">Label</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_01_span">·</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_02_span">Valor</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_03_span">-</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_04_span">Valor</span></div>
      </div>
    </div>
  </div>
</div>

<style>
.mask {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.mask_01 {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.rectangle {
  width: 23px;
  height: 8px;
  left: 0px;
  top: 40px;
  position: absolute;
  background: #0032A0;
}

.oval {
  width: 24px;
  height: 24px;
  left: 0px;
  top: 32px;
  position: absolute;
  background: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 3px 15px rgba(0, 0, 0, 0.08), 0px 4px 5px rgba(0, 0, 0, 0.07);
  border-radius: 9999px;
}

.oval_01 {
  width: 8px;
  height: 8px;
  left: 8px;
  top: 40px;
  position: absolute;
  background: #0032A0;
  border-radius: 9999px;
}

.rectangle_01 {
  width: 66px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.70;
  background: #121212;
  border-radius: 4px;
}

.popover_span {
  color: white;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.popover {
  text-align: center;
}

.shape {
  width: 20px;
  height: 10px;
  left: 2px;
  top: 7px;
  position: absolute;
  background: #AAAAAB;
}

.upperlabel_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_01_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_02_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_03_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_04_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.frame-5307 {
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
}

.tooltips-popover {
  height: 24px;
  padding: 4px;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.airline-app {
  width: 24px;
  height: 24px;
  position: relative;
}

.label {
  left: -25px;
  top: 64px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.label-slider {
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
}

.frame-5124 {
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.percentage0-stateidle {
  width: 176px;
  height: 64px;
  position: relative;
}
</style>
```

## 0, hover

```
<div data-layer="Percentage=0, State=Hover" class="percentage0-statehover">
  <div data-layer="Mask" class="mask"></div>
  <div data-layer="Mask" class="mask_01"></div>
  <div data-layer="Rectangle" class="rectangle"></div>
  <div data-layer="Oval" data-property-1="Default" class="oval">
    <div data-layer="Oval" class="oval_01"></div>
  </div>
  <div data-layer="Oval" class="oval_02"></div>
  <div data-layer="Oval" class="oval_03"></div>
  <div data-layer="Tooltips / Popover" data-property-1="Default" class="tooltips-popover">
    <div data-layer="Rectangle" class="rectangle_01"></div>
    <div data-layer="Popover" class="popover"><span class="popover_span">1,500 USD</span></div>
  </div>
  <div data-layer="Frame 5124" class="frame-5124">
    <div data-layer="Label Slider" data-show-divider="true" data-show-point="true" data-show-value-1="true" class="label-slider">
      <div data-layer="Airline (app)" class="airline-app">
        <div data-layer="Shape" class="shape"></div>
      </div>
      <div data-layer="Frame 5307" class="frame-5307">
        <div data-layer="Upper Label"><span class="upperlabel_span">Label</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_01_span">·</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_02_span">Valor</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_03_span">-</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_04_span">Valor</span></div>
      </div>
    </div>
  </div>
</div>

<style>
.mask {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.mask_01 {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.rectangle {
  width: 23px;
  height: 8px;
  left: 0px;
  top: 40px;
  position: absolute;
  background: #0032A0;
}

.oval_01 {
  width: 32px;
  height: 32px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.50;
  background: #9FC3FF;
  border-radius: 9999px;
}

.oval_02 {
  width: 24px;
  height: 24px;
  left: 0px;
  top: 32px;
  position: absolute;
  background: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 3px 15px rgba(0, 0, 0, 0.08), 0px 4px 5px rgba(0, 0, 0, 0.07);
  border-radius: 9999px;
}

.oval_03 {
  width: 8px;
  height: 8px;
  left: 8px;
  top: 40px;
  position: absolute;
  background: #0032A0;
  border-radius: 9999px;
}

.rectangle_01 {
  width: 66px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.70;
  background: #121212;
  border-radius: 4px;
}

.popover_span {
  color: white;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.popover {
  text-align: center;
}

.shape {
  width: 20px;
  height: 10px;
  left: 2px;
  top: 7px;
  position: absolute;
  background: #AAAAAB;
}

.upperlabel_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_01_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_02_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_03_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_04_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.frame-5307 {
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
}

.oval {
  width: 32px;
  height: 32px;
  left: -4px;
  top: 28px;
  position: absolute;
}

.tooltips-popover {
  height: 24px;
  padding: 4px;
  left: -21px;
  top: 64px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.airline-app {
  width: 24px;
  height: 24px;
  position: relative;
}

.label-slider {
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
}

.frame-5124 {
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.percentage0-statehover {
  width: 176px;
  height: 64px;
  position: relative;
}
</style>
```

## 0, focus

```
<div data-layer="Percentage=0, State=Focus" class="percentage0-statefocus">
  <div data-layer="Mask" class="mask"></div>
  <div data-layer="Mask" class="mask_01"></div>
  <div data-layer="Rectangle" class="rectangle"></div>
  <div data-layer="Oval" data-property-1="Default" class="oval">
    <div data-layer="Oval" class="oval_01"></div>
  </div>
  <div data-layer="Oval" class="oval_02"></div>
  <div data-layer="Oval" class="oval_03"></div>
  <div data-layer="Tooltips / Popover" data-property-1="Default" class="tooltips-popover">
    <div data-layer="Rectangle" class="rectangle_01"></div>
    <div data-layer="Popover" class="popover"><span class="popover_span">1,500 USD</span></div>
  </div>
  <div data-layer="Frame 5124" class="frame-5124">
    <div data-layer="Label Slider" data-show-divider="true" data-show-point="true" data-show-value-1="true" class="label-slider">
      <div data-layer="Airline (app)" class="airline-app">
        <div data-layer="Shape" class="shape"></div>
      </div>
      <div data-layer="Frame 5307" class="frame-5307">
        <div data-layer="Upper Label"><span class="upperlabel_span">Label</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_01_span">·</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_02_span">Valor</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_03_span">-</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_04_span">Valor</span></div>
      </div>
    </div>
  </div>
</div>

<style>
.mask {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.mask_01 {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.rectangle {
  width: 23px;
  height: 8px;
  left: 0px;
  top: 40px;
  position: absolute;
  background: #0032A0;
}

.oval_01 {
  width: 32px;
  height: 32px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.50;
  background: #9FC3FF;
  border-radius: 9999px;
}

.oval_02 {
  width: 24px;
  height: 24px;
  left: 0px;
  top: 32px;
  position: absolute;
  background: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 3px 15px rgba(0, 0, 0, 0.08), 0px 4px 5px rgba(0, 0, 0, 0.07);
  border-radius: 9999px;
}

.oval_03 {
  width: 8px;
  height: 8px;
  left: 8px;
  top: 40px;
  position: absolute;
  background: #0032A0;
  border-radius: 9999px;
}

.rectangle_01 {
  width: 66px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.70;
  background: #121212;
  border-radius: 4px;
}

.popover_span {
  color: white;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.popover {
  text-align: center;
}

.shape {
  width: 20px;
  height: 10px;
  left: 2px;
  top: 7px;
  position: absolute;
  background: #AAAAAB;
}

.upperlabel_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_01_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_02_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_03_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_04_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.frame-5307 {
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
}

.oval {
  width: 32px;
  height: 32px;
  left: -4px;
  top: 28px;
  position: absolute;
}

.tooltips-popover {
  height: 24px;
  padding: 4px;
  left: -21px;
  top: 64px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.airline-app {
  width: 24px;
  height: 24px;
  position: relative;
}

.label-slider {
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
}

.frame-5124 {
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.percentage0-statefocus {
  width: 176px;
  height: 64px;
  position: relative;
}
</style>
```

## 0, active

```
<div data-layer="Percentage=0, State=Active" class="percentage0-stateactive">
  <div data-layer="Mask" class="mask"></div>
  <div data-layer="Mask" class="mask_01"></div>
  <div data-layer="Rectangle" class="rectangle"></div>
  <div data-layer="Oval" data-property-1="Big" class="oval">
    <div data-layer="Oval" class="oval_01"></div>
  </div>
  <div data-layer="Oval" class="oval_02"></div>
  <div data-layer="Oval" class="oval_03"></div>
  <div data-layer="Tooltips / Popover" data-property-1="Default" class="tooltips-popover">
    <div data-layer="Rectangle" class="rectangle_01"></div>
    <div data-layer="Popover" class="popover"><span class="popover_span">1,500 USD</span></div>
  </div>
  <div data-layer="Frame 5124" class="frame-5124">
    <div data-layer="Label Slider" data-show-divider="true" data-show-point="true" data-show-value-1="true" class="label-slider">
      <div data-layer="Airline (app)" class="airline-app">
        <div data-layer="Shape" class="shape"></div>
      </div>
      <div data-layer="Frame 5307" class="frame-5307">
        <div data-layer="Upper Label"><span class="upperlabel_span">Label</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_01_span">·</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_02_span">Valor</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_03_span">-</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_04_span">Valor</span></div>
      </div>
    </div>
  </div>
</div>

<style>
.mask {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.mask_01 {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.rectangle {
  width: 23px;
  height: 8px;
  left: 0px;
  top: 40px;
  position: absolute;
  background: #0032A0;
}

.oval_01 {
  width: 42px;
  height: 42px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.50;
  background: #9FC3FF;
  border-radius: 9999px;
}

.oval_02 {
  width: 24px;
  height: 24px;
  left: 0px;
  top: 32px;
  position: absolute;
  background: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 3px 15px rgba(0, 0, 0, 0.08), 0px 4px 5px rgba(0, 0, 0, 0.07);
  border-radius: 9999px;
}

.oval_03 {
  width: 8px;
  height: 8px;
  left: 8px;
  top: 40px;
  position: absolute;
  background: #0032A0;
  border-radius: 9999px;
}

.rectangle_01 {
  width: 66px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.70;
  background: #121212;
  border-radius: 4px;
}

.popover_span {
  color: white;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.popover {
  text-align: center;
}

.shape {
  width: 20px;
  height: 10px;
  left: 2px;
  top: 7px;
  position: absolute;
  background: #AAAAAB;
}

.upperlabel_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_01_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_02_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_03_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_04_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.frame-5307 {
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
}

.oval {
  width: 42px;
  height: 42px;
  left: -9px;
  top: 23px;
  position: absolute;
}

.tooltips-popover {
  height: 24px;
  padding: 4px;
  left: -21px;
  top: 64px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.airline-app {
  width: 24px;
  height: 24px;
  position: relative;
}

.label-slider {
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
}

.frame-5124 {
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.percentage0-stateactive {
  width: 176px;
  height: 64px;
  position: relative;
}
</style>
```

# 50, idle

Aca solo cambia la parte de atras

```
<div data-layer="Percentage=50%, State=Idle" class="percentage50-stateidle">
  <div data-layer="Mask" class="mask"></div>
  <div data-layer="Mask" class="mask_01"></div>
  <div data-layer="Rectangle" class="rectangle"></div>
  <div data-layer="Oval" class="oval"></div>
  <div data-layer="Oval" class="oval_01"></div>
  <div data-layer="Tooltips / Popover" data-property-1="Default" class="tooltips-popover">
    <div data-layer="Rectangle" class="rectangle_01"></div>
    <div data-layer="Popover" class="popover"><span class="popover_span">1,500 USD</span></div>
  </div>
  <div data-layer="Frame 5124" class="frame-5124">
    <div data-layer="Label Slider" data-show-divider="true" data-show-point="true" data-show-value-1="true" class="label-slider">
      <div data-layer="Airline (app)" class="airline-app">
        <div data-layer="Shape" class="shape"></div>
      </div>
      <div data-layer="Frame 5307" class="frame-5307">
        <div data-layer="Upper Label"><span class="upperlabel_span">Label</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_01_span">·</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_02_span">Valor</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_03_span">-</span></div>
        <div data-layer="Upper Label"><span class="upperlabel_04_span">Valor</span></div>
      </div>
    </div>
  </div>
</div>

<style>
.mask {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.mask_01 {
  width: 176px;
  height: 4px;
  left: 0px;
  top: 42px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 1000px;
}

.rectangle {
  width: 88px;
  height: 8px;
  left: 0px;
  top: 40px;
  position: absolute;
  background: #0032A0;
}

.oval {
  width: 24px;
  height: 24px;
  left: 76px;
  top: 32px;
  position: absolute;
  background: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 3px 15px rgba(0, 0, 0, 0.08), 0px 4px 5px rgba(0, 0, 0, 0.07);
  border-radius: 9999px;
}

.oval_01 {
  width: 8px;
  height: 8px;
  left: 84px;
  top: 40px;
  position: absolute;
  background: #0032A0;
  border-radius: 9999px;
}

.rectangle_01 {
  width: 66px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  opacity: 0.70;
  background: #121212;
  border-radius: 4px;
}

.popover_span {
  color: white;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.popover {
  text-align: center;
}

.shape {
  width: 20px;
  height: 10px;
  left: 2px;
  top: 7px;
  position: absolute;
  background: #AAAAAB;
}

.upperlabel_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_01_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_02_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_03_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.upperlabel_04_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.frame-5307 {
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
}

.tooltips-popover {
  height: 24px;
  padding: 4px;
  left: 55px;
  top: 64px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.airline-app {
  width: 24px;
  height: 24px;
  position: relative;
}

.label-slider {
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
}

.frame-5124 {
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.percentage50-stateidle {
  width: 176px;
  height: 64px;
  position: relative;
}
</style>
```
