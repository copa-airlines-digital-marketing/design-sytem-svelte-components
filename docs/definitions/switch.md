# Switch

> **Status:** `done` — Component lives at `src/lib/components/switch/`. Do not regenerate.

es un control boleano, igual aca agarre el componente completo

```
<div data-layer="Switch" class="switch">
  <div data-layer="Position=Off, State=Idle" class="positionoff-stateidle">
    <div data-layer="Mask" class="mask"></div>
    <div data-layer="Mask" class="mask_01"></div>
    <div data-layer="Mask" class="mask_02"></div>
    <div data-layer="Mask" class="mask_03"></div>
  </div>
  <div data-layer="Position=Off, State=Hover" class="positionoff-statehover">
    <div data-layer="Mask" class="mask_04"></div>
    <div data-layer="Mask" class="mask_05"></div>
    <div data-layer="Mask" class="mask_06"></div>
    <div data-layer="Mask" class="mask_07"></div>
  </div>
  <div data-layer="Position=Off, State=Focus" class="positionoff-statefocus">
    <div data-layer="Mask" class="mask_08"></div>
    <div data-layer="Mask" class="mask_09"></div>
    <div data-layer="Mask" class="mask_10"></div>
    <div data-layer="Mask" class="mask_11"></div>
  </div>
  <div data-layer="Position=Off, State=Active" class="positionoff-stateactive">
    <div data-layer="Mask" class="mask_12"></div>
    <div data-layer="Mask" class="mask_13"></div>
    <div data-layer="Mask" class="mask_14"></div>
    <div data-layer="Mask" class="mask_15"></div>
  </div>
  <div data-layer="Position=Off, State=Disabled" class="positionoff-statedisabled">
    <div data-layer="Mask" class="mask_16"></div>
    <div data-layer="Mask" class="mask_17"></div>
    <div data-layer="Mask" class="mask_18"></div>
    <div data-layer="Mask" class="mask_19"></div>
  </div>
  <div data-layer="Position=On, State=Idle" class="positionon-stateidle">
    <div data-layer="Mask" class="mask_20"></div>
    <div data-layer="Mask" class="mask_21"></div>
    <div data-layer="Mask" class="mask_22"></div>
    <div data-layer="Mask" class="mask_23"></div>
  </div>
  <div data-layer="Position=On, State=Hover" class="positionon-statehover">
    <div data-layer="Mask" class="mask_24"></div>
    <div data-layer="Mask" class="mask_25"></div>
    <div data-layer="Mask" class="mask_26"></div>
    <div data-layer="Mask" class="mask_27"></div>
  </div>
  <div data-layer="Position=On, State=Focus" class="positionon-statefocus">
    <div data-layer="Mask" class="mask_28"></div>
    <div data-layer="Mask" class="mask_29"></div>
    <div data-layer="Mask" class="mask_30"></div>
    <div data-layer="Mask" class="mask_31"></div>
  </div>
  <div data-layer="Position=On, State=Active" class="positionon-stateactive">
    <div data-layer="Mask" class="mask_32"></div>
    <div data-layer="Mask" class="mask_33"></div>
    <div data-layer="Mask" class="mask_34"></div>
    <div data-layer="Mask" class="mask_35"></div>
  </div>
  <div data-layer="Position=On, State=Disabled" class="positionon-statedisabled">
    <div data-layer="Mask" class="mask_36"></div>
    <div data-layer="Mask" class="mask_37"></div>
    <div data-layer="Mask" class="mask_38"></div>
    <div data-layer="Mask" class="mask_39"></div>
  </div>
</div>

<style>
.mask {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #AAAAAB;
  border-radius: 35px;
}

.mask_01 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_02 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_03 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_04 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #D6E3FF;
  border-radius: 35px;
}

.mask_05 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_06 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_07 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_08 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #D6E3FF;
  border-radius: 35px;
}

.mask_09 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_10 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_11 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_12 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #001A66;
  border-radius: 35px;
}

.mask_13 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_14 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_15 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_16 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_17 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_18 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: white;
  border-radius: 9999px;
}

.mask_19 {
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  border-radius: 9999px;
}

.mask_20 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0032A0;
  border-radius: 35px;
}

.mask_21 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0060A9;
  border-radius: 35px;
}

.mask_22 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_23 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_24 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0E68FF;
  border-radius: 35px;
}

.mask_25 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0060A9;
  border-radius: 35px;
}

.mask_26 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_27 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_28 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0E68FF;
  border-radius: 35px;
}

.mask_29 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0060A9;
  border-radius: 35px;
}

.mask_30 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_31 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_32 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #001A66;
  border-radius: 35px;
}

.mask_33 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #0060A9;
  border-radius: 35px;
}

.mask_34 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_35 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 9999px;
}

.mask_36 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 35px;
}

.mask_37 {
  width: 48px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #EFEFEE;
  border-radius: 35px;
}

.mask_38 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: white;
  border-radius: 9999px;
}

.mask_39 {
  width: 22px;
  height: 22px;
  left: 25px;
  top: 1px;
  position: absolute;
  background: #FCFCFC;
  border-radius: 9999px;
}

.positionoff-stateidle {
  width: 48px;
  height: 24px;
  left: 104px;
  top: 20px;
  position: absolute;
}

.positionoff-statehover {
  width: 48px;
  height: 24px;
  left: 104px;
  top: 60px;
  position: absolute;
}

.positionoff-statefocus {
  width: 48px;
  height: 24px;
  left: 104px;
  top: 100px;
  position: absolute;
  border-radius: 20px;
  outline: 2px #9FC3FF solid;
}

.positionoff-stateactive {
  width: 48px;
  height: 24px;
  left: 104px;
  top: 140px;
  position: absolute;
  border-radius: 20px;
  outline: 2px #9FC3FF solid;
}

.positionoff-statedisabled {
  width: 48px;
  height: 24px;
  left: 104px;
  top: 181px;
  position: absolute;
}

.positionon-stateidle {
  width: 48px;
  height: 24px;
  left: 20px;
  top: 20px;
  position: absolute;
}

.positionon-statehover {
  width: 48px;
  height: 24px;
  left: 20px;
  top: 60px;
  position: absolute;
}

.positionon-statefocus {
  width: 48px;
  height: 24px;
  left: 20px;
  top: 100px;
  position: absolute;
  border-radius: 20px;
  outline: 2px #9FC3FF solid;
}

.positionon-stateactive {
  width: 48px;
  height: 24px;
  left: 20px;
  top: 140px;
  position: absolute;
  border-radius: 20px;
  outline: 2px #9FC3FF solid;
}

.positionon-statedisabled {
  width: 48px;
  height: 24px;
  left: 20px;
  top: 181px;
  position: absolute;
}

.switch {
  width: 175px;
  height: 232px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  border: 1px #7B61FF solid;
}
</style>
```
