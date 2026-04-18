# Modal

> **Status:** `done` — Component lives at `src/lib/components/modal/`. Do not regenerate.

Aca el modal usa el dimmer como overlay, tienen dos subcomponentes, el modal close y el action bar, el boton tambien lo usa

## Modal Close

```
<div data-layer="ModalClose" class="modalclose">
  <div data-layer="Type=Default" class="typedefault">
    <div data-svg-wrapper data-layer="Cross" class="cross">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0015 10.4997L20.0015 17.6663L13.0015 10.4997L10.5015 12.9997L17.6681 19.9997L10.5015 26.9997L13.0015 29.4997L20.0015 22.333L27.0015 29.4997L29.5015 26.9997L22.3348 19.9997L29.5015 12.9997L27.0015 10.4997Z" fill="#0032A0"/>
      </svg>
    </div>
  </div>
  <div data-layer="Type=56 px" class="type56-px">
    <div data-layer="Select the type of document you want to register" class="select-the-type-of-document-you-want-to-register"><span class="selectthetypeofdocumentyouwanttoregister_span">Select the type of document you want to register</span></div>
    <div data-svg-wrapper data-layer="Cross" class="cross_01">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0015 10.4997L20.0015 17.6663L13.0015 10.4997L10.5015 12.9997L17.6681 19.9997L10.5015 26.9997L13.0015 29.4997L20.0015 22.333L27.0015 29.4997L29.5015 26.9997L22.3348 19.9997L29.5015 12.9997L27.0015 10.4997Z" fill="#0032A0"/>
      </svg>
    </div>
  </div>
  <div data-layer="Type=40px" class="type40px">
    <div data-layer="Select the type of document you want to register" class="select-the-type-of-document-you-want-to-register_01"><span class="selectthetypeofdocumentyouwanttoregister_01_span">Select the type of document you want to register</span></div>
    <div data-svg-wrapper data-layer="Cross" class="cross_02">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0015 10.4997L20.0015 17.6663L13.0015 10.4997L10.5015 12.9997L17.6681 19.9997L10.5015 26.9997L13.0015 29.4997L20.0015 22.333L27.0015 29.4997L29.5015 26.9997L22.3348 19.9997L29.5015 12.9997L27.0015 10.4997Z" fill="#0032A0"/>
      </svg>
    </div>
  </div>
  <div data-layer="Type=32px" class="type32px">
    <div data-layer="Select the type of document you want to register" class="select-the-type-of-document-you-want-to-register_02"><span class="selectthetypeofdocumentyouwanttoregister_02_span">Select the type of document you want to register</span></div>
    <div data-svg-wrapper data-layer="Cross" class="cross_03">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0015 10.4997L20.0015 17.6664L13.0015 10.4997L10.5015 12.9997L17.6681 19.9997L10.5015 26.9997L13.0015 29.4997L20.0015 22.333L27.0015 29.4997L29.5015 26.9997L22.3348 19.9997L29.5015 12.9997L27.0015 10.4997Z" fill="#0032A0"/>
      </svg>
    </div>
  </div>
  <div data-layer="Type=16px" class="type16px">
    <div data-layer="Select the type of document you want to register" class="select-the-type-of-document-you-want-to-register_03"><span class="selectthetypeofdocumentyouwanttoregister_03_span">Select the type of document you want to register</span></div>
    <div data-svg-wrapper data-layer="Cross" class="cross_04">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6009 8.39972L16.0009 14.1331L10.4009 8.39972L8.40088 10.3997L14.1342 15.9997L8.40088 21.5997L10.4009 23.5997L16.0009 17.8664L21.6009 23.5997L23.6009 21.5997L17.8675 15.9997L23.6009 10.3997L21.6009 8.39972Z" fill="#0032A0"/>
      </svg>
    </div>
  </div>
</div>

<style>
.selectthetypeofdocumentyouwanttoregister_span {
  color: #0032A0;
  font-size: 32px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 40px;
  word-wrap: break-word;
}

.select-the-type-of-document-you-want-to-register {
  flex: 1 1 0;
}

.selectthetypeofdocumentyouwanttoregister_01_span {
  color: #0032A0;
  font-size: 28px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
}

.select-the-type-of-document-you-want-to-register_01 {
  flex: 1 1 0;
}

.selectthetypeofdocumentyouwanttoregister_02_span {
  color: #0032A0;
  font-size: 24px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
}

.select-the-type-of-document-you-want-to-register_02 {
  flex: 1 1 0;
}

.selectthetypeofdocumentyouwanttoregister_03_span {
  color: #0032A0;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
}

.select-the-type-of-document-you-want-to-register_03 {
  flex: 1 1 0;
}

.cross_01 {
  position: relative;
}

.type56-px {
  width: 1200px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 56px;
  padding-right: 8px;
  left: 20px;
  top: 114px;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.cross_02 {
  position: relative;
}

.type40px {
  width: 1200px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 40px;
  padding-right: 8px;
  left: 20px;
  top: 208px;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.cross_03 {
  position: relative;
}

.type32px {
  width: 1200px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 32px;
  padding-right: 8px;
  left: 20px;
  top: 302px;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.cross_04 {
  position: relative;
}

.type16px {
  width: 1200px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 8px;
  left: 20px;
  top: 396px;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.cross {
  position: relative;
}

.typedefault {
  width: 1200px;
  padding-top: 8px;
  padding-right: 8px;
  left: 20px;
  top: 20px;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.modalclose {
  width: 1240px;
  height: 464px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  border: 1px #9747FF solid;
}
</style>
```

## Action bar

```
<div data-layer=".Action Bar Component FInal" class="action-bar-component-final">
  <div data-layer="# actions=2, Breakpoint=Large, Behavior=Default, Button=Large" class="component--actions2-breakpointlarge-behaviordefault-buttonlarge">
    <div data-layer="Options" class="options">
      <div data-layer="Divider" class="divider"></div>
      <div data-layer="Frame 65" class="frame-65">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded">
          <div data-layer="ButtonBase" class="buttonbase">
            <div data-layer="Button" class="button">
              <div data-layer="Label" class="label"><span class="label_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_01">
          <div data-layer="ButtonBase" class="buttonbase_01">
            <div data-layer="Button" class="button_01">
              <div data-layer="Label" class="label_01"><span class="label_01_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=No buttons, Breakpoint=Large, Behavior=Default, Button=Large" class="component--actionsno-buttons-breakpointlarge-behaviordefault-buttonlarge">
    <div data-layer="Options" class="options_01">
      <div data-layer="Divider" class="divider_01"></div>
    </div>
  </div>
  <div data-layer="# actions=No buttons, Breakpoint=Large, Behavior=Default, Button=Default" class="component--actionsno-buttons-breakpointlarge-behaviordefault-buttondefault">
    <div data-layer="Options" class="options_02">
      <div data-layer="Divider" class="divider_02"></div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Large, Behavior=Default, Button=Default" class="component--actions2-breakpointlarge-behaviordefault-buttondefault">
    <div data-layer="Options" class="options_03">
      <div data-layer="Divider" class="divider_03"></div>
      <div data-layer="Frame 65" class="frame-65_01">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_02">
          <div data-layer="ButtonBase" class="buttonbase_02">
            <div data-layer="Button" class="button_02">
              <div data-layer="Label" class="label_02"><span class="label_02_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_03">
          <div data-layer="ButtonBase" class="buttonbase_03">
            <div data-layer="Button" class="button_03">
              <div data-layer="Label" class="label_03"><span class="label_03_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Large, Behavior=Sticky, Button=Large" class="component--actions2-breakpointlarge-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator">
      <div data-layer="Rectangle" class="rectangle"></div>
      <div data-layer="Group 4" class="group-4">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll"><span class="scroll_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_04">
      <div data-layer="Frame 65" class="frame-65_02">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_04">
          <div data-layer="ButtonBase" class="buttonbase_04">
            <div data-layer="Button" class="button_04">
              <div data-layer="Label" class="label_04"><span class="label_04_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_05">
          <div data-layer="ButtonBase" class="buttonbase_05">
            <div data-layer="Button" class="button_05">
              <div data-layer="Label" class="label_05"><span class="label_05_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Large, Behavior=Sticky, Button=Default" class="component--actions2-breakpointlarge-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_01">
      <div data-layer="Rectangle" class="rectangle_01"></div>
      <div data-layer="Group 4" class="group-4_01">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_01">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_01"><span class="scroll_01_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_05">
      <div data-layer="Divider" class="divider_04"></div>
      <div data-layer="Frame 65" class="frame-65_03">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_06">
          <div data-layer="ButtonBase" class="buttonbase_06">
            <div data-layer="Button" class="button_06">
              <div data-layer="Label" class="label_06"><span class="label_06_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_07">
          <div data-layer="ButtonBase" class="buttonbase_07">
            <div data-layer="Button" class="button_07">
              <div data-layer="Label" class="label_07"><span class="label_07_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Small, Behavior=Sticky, Button=Large" class="component--actions2-breakpointsmall-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_02">
      <div data-layer="Rectangle" class="rectangle_02"></div>
      <div data-layer="Group 4" class="group-4_02">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_02">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_02"><span class="scroll_02_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_06">
      <div data-layer="Divider" class="divider_05"></div>
      <div data-layer="Frame 65" class="frame-65_04">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_08">
          <div data-layer="ButtonBase" class="buttonbase_08">
            <div data-layer="Button" class="button_08">
              <div data-layer="Label" class="label_08"><span class="label_08_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_09">
          <div data-layer="ButtonBase" class="buttonbase_09">
            <div data-layer="Button" class="button_09">
              <div data-layer="Label" class="label_09"><span class="label_09_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Small, Behavior=Sticky, Button=Default" class="component--actions2-breakpointsmall-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_03">
      <div data-layer="Rectangle" class="rectangle_03"></div>
      <div data-layer="Group 4" class="group-4_03">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_03">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_03"><span class="scroll_03_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_07">
      <div data-layer="Divider" class="divider_06"></div>
      <div data-layer="Frame 65" class="frame-65_05">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_10">
          <div data-layer="ButtonBase" class="buttonbase_10">
            <div data-layer="Button" class="button_10">
              <div data-layer="Label" class="label_10"><span class="label_10_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_11">
          <div data-layer="ButtonBase" class="buttonbase_11">
            <div data-layer="Button" class="button_11">
              <div data-layer="Label" class="label_11"><span class="label_11_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Small, Behavior=Sticky, Button=Large" class="component--actions1-breakpointsmall-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_04">
      <div data-layer="Rectangle" class="rectangle_04"></div>
      <div data-layer="Group 4" class="group-4_04">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_04">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_04"><span class="scroll_04_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_08">
      <div data-layer="Divider" class="divider_07"></div>
      <div data-layer="Frame 65" class="frame-65_06">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_12">
          <div data-layer="ButtonBase" class="buttonbase_12">
            <div data-layer="Button" class="button_12">
              <div data-layer="Label" class="label_12"><span class="label_12_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=Price, Breakpoint=Small, Behavior=Sticky, Button=Large" class="component--actionsprice-breakpointsmall-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_05">
      <div data-layer="Rectangle" class="rectangle_05"></div>
      <div data-layer="Group 4" class="group-4_05">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_05">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_05"><span class="scroll_05_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_09">
      <div data-layer="Divider" class="divider_08"></div>
      <div data-layer="Frame 4913" class="frame-4913">
        <div data-layer="Price" class="price">
          <div data-layer="74.000 COP" class="text-74000-cop"><span class="f4000cop_span">20,000 millas + 68.000 COP</span></div>
          <div data-layer="(por pasajero)" class="por-pasajero"><span class="porpasajero_span">Solo Ida · Por Adulto</span></div>
        </div>
        <div data-layer="Frame 65" class="frame-65_07">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_13">
            <div data-layer="ButtonBase" class="buttonbase_13">
              <div data-layer="Button" class="button_13">
                <div data-layer="Label" class="label_13"><span class="label_13_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Small, Behavior=Sticky, Button=Default" class="component--actions1-breakpointsmall-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_06">
      <div data-layer="Rectangle" class="rectangle_06"></div>
      <div data-layer="Group 4" class="group-4_06">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_06">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_06"><span class="scroll_06_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_10">
      <div data-layer="Divider" class="divider_09"></div>
      <div data-layer="Frame 65" class="frame-65_08">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_14">
          <div data-layer="ButtonBase" class="buttonbase_14">
            <div data-layer="Button" class="button_14">
              <div data-layer="Label" class="label_14"><span class="label_14_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=Price, Breakpoint=Small, Behavior=Sticky, Button=Default" class="component--actionsprice-breakpointsmall-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_07">
      <div data-layer="Rectangle" class="rectangle_07"></div>
      <div data-layer="Group 4" class="group-4_07">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_07">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_07"><span class="scroll_07_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_11">
      <div data-layer="Divider" class="divider_10"></div>
      <div data-layer="Action" class="action">
        <div data-layer="Price" class="price_01">
          <div data-layer="74.000 COP" class="text-74000-cop_01"><span class="f4000cop_01_span">20,000 millas + 68.000 COP</span></div>
          <div data-layer="(por pasajero)" class="por-pasajero_01"><span class="porpasajero_01_span">Solo Ida · Por Adulto</span></div>
        </div>
        <div data-layer="Frame 65" class="frame-65_09">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_15">
            <div data-layer="ButtonBase" class="buttonbase_15">
              <div data-layer="Button" class="button_15">
                <div data-layer="Label" class="label_15"><span class="label_15_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Large, Behavior=Sticky, Button=Large" class="component--actions1-breakpointlarge-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_08">
      <div data-layer="Rectangle" class="rectangle_08"></div>
      <div data-layer="Group 4" class="group-4_08">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_08">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_08"><span class="scroll_08_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_12">
      <div data-layer="Options" class="options_13"></div>
      <div data-layer="Frame 65" class="frame-65_10">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_16">
          <div data-layer="ButtonBase" class="buttonbase_16">
            <div data-layer="Button" class="button_16">
              <div data-layer="Label" class="label_16"><span class="label_16_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=Price, Breakpoint=Large, Behavior=Sticky, Button=Large" class="component--actionsprice-breakpointlarge-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_09">
      <div data-layer="Rectangle" class="rectangle_09"></div>
      <div data-layer="Group 4" class="group-4_09">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_09">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_09"><span class="scroll_09_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_14">
      <div data-layer="Divider" class="divider_11"></div>
      <div data-layer="Action" class="action_01">
        <div data-layer="Price" class="price_02">
          <div data-layer="74.000 COP" class="text-74000-cop_02"><span class="f4000cop_02_span">20,000 millas + 68.000 COP</span></div>
          <div data-layer="(por pasajero)" class="por-pasajero_02"><span class="porpasajero_02_span">Solo Ida · Por Adulto</span></div>
        </div>
        <div data-layer="Frame 65" class="frame-65_11">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_17">
            <div data-layer="ButtonBase" class="buttonbase_17">
              <div data-layer="Button" class="button_17">
                <div data-layer="Label" class="label_17"><span class="label_17_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Large, Behavior=Sticky, Button=Default" class="component--actions1-breakpointlarge-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_10">
      <div data-layer="Rectangle" class="rectangle_10"></div>
      <div data-layer="Group 4" class="group-4_10">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_10"><span class="scroll_10_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_15">
      <div data-layer="Options" class="options_16"></div>
      <div data-layer="Frame 65" class="frame-65_12">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_18">
          <div data-layer="ButtonBase" class="buttonbase_18">
            <div data-layer="Button" class="button_18">
              <div data-layer="Label" class="label_18"><span class="label_18_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=Price, Breakpoint=Large, Behavior=Sticky, Button=Default" class="component--actionsprice-breakpointlarge-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_11">
      <div data-layer="Rectangle" class="rectangle_11"></div>
      <div data-layer="Group 4" class="group-4_11">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_11">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_11"><span class="scroll_11_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Options" class="options_17">
      <div data-layer="Divider" class="divider_12"></div>
      <div data-layer="Action" class="action_02">
        <div data-layer="Price" class="price_03">
          <div data-layer="74.000 COP" class="text-74000-cop_03"><span class="f4000cop_03_span">20,000 millas + 68.000 COP</span></div>
          <div data-layer="(por pasajero)" class="por-pasajero_03"><span class="porpasajero_03_span">Solo Ida · Por Adulto</span></div>
        </div>
        <div data-layer="Btn" class="btn">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_19">
            <div data-layer="ButtonBase" class="buttonbase_19">
              <div data-layer="Button" class="button_19">
                <div data-layer="Label" class="label_19"><span class="label_19_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Small, Behavior=Default, Button=Large" class="component--actions2-breakpointsmall-behaviordefault-buttonlarge">
    <div data-layer="Divider" class="divider_13"></div>
    <div data-layer="Options" class="options_18">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_20">
        <div data-layer="ButtonBase" class="buttonbase_20">
          <div data-layer="Button" class="button_20">
            <div data-layer="Label" class="label_20"><span class="label_20_span">Secondary Action</span></div>
          </div>
        </div>
      </div>
      <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_21">
        <div data-layer="ButtonBase" class="buttonbase_21">
          <div data-layer="Button" class="button_21">
            <div data-layer="Label" class="label_21"><span class="label_21_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=Small, Behavior=Default, Button=Default" class="component--actions2-breakpointsmall-behaviordefault-buttondefault">
    <div data-layer="Divider" class="divider_14"></div>
    <div data-layer="Options" class="options_19">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_22">
        <div data-layer="ButtonBase" class="buttonbase_22">
          <div data-layer="Button" class="button_22">
            <div data-layer="Label" class="label_22"><span class="label_22_span">Secondary Action</span></div>
          </div>
        </div>
      </div>
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_23">
        <div data-layer="ButtonBase" class="buttonbase_23">
          <div data-layer="Button" class="button_23">
            <div data-layer="Label" class="label_23"><span class="label_23_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=XSmall, Behavior=Default, Button=Large" class="component--actions2-breakpointxsmall-behaviordefault-buttonlarge">
    <div data-layer="Divider" class="divider_15"></div>
    <div data-layer="Options" class="options_20">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_24">
        <div data-layer="ButtonBase" class="buttonbase_24">
          <div data-layer="Button" class="button_24">
            <div data-layer="Label" class="label_24"><span class="label_24_span">Main action</span></div>
          </div>
        </div>
      </div>
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="TransparentPrimaryMain" class="buttonrounded_25">
        <div data-layer="ButtonBase" class="buttonbase_25">
          <div data-layer="Button" class="button_25">
            <div data-layer="Label" class="label_25"><span class="label_25_span">Secondary Action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=XSmall, Behavior=Default, Button=Default" class="component--actions2-breakpointxsmall-behaviordefault-buttondefault">
    <div data-layer="Divider" class="divider_16"></div>
    <div data-layer="Options" class="options_21">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_26">
        <div data-layer="ButtonBase" class="buttonbase_26">
          <div data-layer="Button" class="button_26">
            <div data-layer="Label" class="label_26"><span class="label_26_span">Main action</span></div>
          </div>
        </div>
      </div>
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_27">
        <div data-layer="ButtonBase" class="buttonbase_27">
          <div data-layer="Button" class="button_27">
            <div data-layer="Label" class="label_27"><span class="label_27_span">Secondary Action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=XSmall, Behavior=Sticky, Button=Large" class="component--actions2-breakpointxsmall-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_12">
      <div data-layer="Rectangle" class="rectangle_12"></div>
      <div data-layer="Group 4" class="group-4_12">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_12"><span class="scroll_12_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Frame 65" class="frame-65_13">
      <div data-layer="Divider" class="divider_17"></div>
      <div data-layer="Options" class="options_22">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_28">
          <div data-layer="ButtonBase" class="buttonbase_28">
            <div data-layer="Button" class="button_28">
              <div data-layer="Label" class="label_28"><span class="label_28_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="TransparentPrimaryMain" class="buttonrounded_29">
          <div data-layer="ButtonBase" class="buttonbase_29">
            <div data-layer="Button" class="button_29">
              <div data-layer="Label" class="label_29"><span class="label_29_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=2, Breakpoint=XSmall, Behavior=Sticky, Button=Default" class="component--actions2-breakpointxsmall-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_13">
      <div data-layer="Rectangle" class="rectangle_13"></div>
      <div data-layer="Group 4" class="group-4_13">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_13">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_13"><span class="scroll_13_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Frame 65" class="frame-65_14">
      <div data-layer="Divider" class="divider_18"></div>
      <div data-layer="Options" class="options_23">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_30">
          <div data-layer="ButtonBase" class="buttonbase_30">
            <div data-layer="Button" class="button_30">
              <div data-layer="Label" class="label_30"><span class="label_30_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_31">
          <div data-layer="ButtonBase" class="buttonbase_31">
            <div data-layer="Button" class="button_31">
              <div data-layer="Label" class="label_31"><span class="label_31_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=XSmall, Behavior=Sticky, Button=Large" class="component--actions1-breakpointxsmall-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_14">
      <div data-layer="Rectangle" class="rectangle_14"></div>
      <div data-layer="Group 4" class="group-4_14">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_14">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_14"><span class="scroll_14_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Frame 65" class="frame-65_15">
      <div data-layer="Divider" class="divider_19"></div>
      <div data-layer="Options" class="options_24">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_32">
          <div data-layer="ButtonBase" class="buttonbase_32">
            <div data-layer="Button" class="button_32">
              <div data-layer="Label" class="label_32"><span class="label_32_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=XSmall, Behavior=Sticky, Button=Default" class="component--actions1-breakpointxsmall-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_15">
      <div data-layer="Rectangle" class="rectangle_15"></div>
      <div data-layer="Group 4" class="group-4_15">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_15">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_15"><span class="scroll_15_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Frame 65" class="frame-65_16">
      <div data-layer="Divider" class="divider_20"></div>
      <div data-layer="Options" class="options_25">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_33">
          <div data-layer="ButtonBase" class="buttonbase_33">
            <div data-layer="Button" class="button_33">
              <div data-layer="Label" class="label_33"><span class="label_33_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=Price, Breakpoint=XSmall, Behavior=Sticky, Button=Default" class="component--actionsprice-breakpointxsmall-behaviorsticky-buttondefault">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_16">
      <div data-layer="Rectangle" class="rectangle_16"></div>
      <div data-layer="Group 4" class="group-4_16">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_16">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_16"><span class="scroll_16_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Frame 65" class="frame-65_17">
      <div data-layer="Divider" class="divider_21"></div>
      <div data-layer="Action" class="action_03">
        <div data-layer="Price" class="price_04">
          <div data-layer="74.000 COP" class="text-74000-cop_04"><span class="f4000cop_04_span">20,000 millas + 68.000 COP</span></div>
          <div data-layer="(por pasajero)" class="por-pasajero_04"><span class="porpasajero_04_span">Solo Ida · Por Adulto</span></div>
        </div>
        <div data-layer="Options" class="options_26">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_34">
            <div data-layer="ButtonBase" class="buttonbase_34">
              <div data-layer="Button" class="button_34">
                <div data-layer="Label" class="label_34"><span class="label_34_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=Price, Breakpoint=XSmall, Behavior=Sticky, Button=Large" class="component--actionsprice-breakpointxsmall-behaviorsticky-buttonlarge">
    <div data-layer=".Scroll Indicator" class="scroll-indicator_17">
      <div data-layer="Rectangle" class="rectangle_17"></div>
      <div data-layer="Group 4" class="group-4_17">
        <div data-svg-wrapper data-layer="ScrollIndicator" class="scrollindicator_17">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.40039C14.75 3.40039 16.9999 5.73783 17 8.59473V15.2061C16.9999 18.0629 14.75 20.4004 12 20.4004C9.25003 20.4004 7.00006 18.0629 7 15.2061V8.59473C7.00006 5.73783 9.25003 3.40039 12 3.40039ZM11.999 4.34473C9.74906 4.34478 7.9082 6.25726 7.9082 8.59473V15.2061C7.90832 17.5434 9.74913 19.456 11.999 19.4561C14.249 19.4561 16.0897 17.5435 16.0898 15.2061V8.59473C16.0898 6.25723 14.249 4.34473 11.999 4.34473ZM11.999 6.46973C12.249 6.46973 12.4541 6.68266 12.4541 6.94238V8.83105C12.454 9.09068 12.249 9.30273 11.999 9.30273C11.7493 9.30248 11.545 9.09052 11.5449 8.83105V6.94238C11.5449 6.68281 11.7492 6.46998 11.999 6.46973Z" fill="#999999"/>
          </svg>
        </div>
        <div data-layer="Scroll" class="scroll_17"><span class="scroll_17_span">Scroll</span></div>
      </div>
    </div>
    <div data-layer="Frame 65" class="frame-65_18">
      <div data-layer="Divider" class="divider_22"></div>
      <div data-layer="Action" class="action_04">
        <div data-layer="Price" class="price_05">
          <div data-layer="74.000 COP" class="text-74000-cop_05"><span class="f4000cop_05_span">20,000 millas + 68.000 COP</span></div>
          <div data-layer="(por pasajero)" class="por-pasajero_05"><span class="porpasajero_05_span">Solo Ida · Por Adulto</span></div>
        </div>
        <div data-layer="Options" class="options_27">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_35">
            <div data-layer="ButtonBase" class="buttonbase_35">
              <div data-layer="Button" class="button_35">
                <div data-layer="Label" class="label_35"><span class="label_35_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=XSmall, Behavior=Default, Button=Large" class="component--actions1-breakpointxsmall-behaviordefault-buttonlarge">
    <div data-layer="Divider" class="divider_23"></div>
    <div data-layer="Options" class="options_28">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_36">
        <div data-layer="ButtonBase" class="buttonbase_36">
          <div data-layer="Button" class="button_36">
            <div data-layer="Label" class="label_36"><span class="label_36_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=XSmall, Behavior=Default, Button=Default" class="component--actions1-breakpointxsmall-behaviordefault-buttondefault">
    <div data-layer="Divider" class="divider_24"></div>
    <div data-layer="Options" class="options_29">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_37">
        <div data-layer="ButtonBase" class="buttonbase_37">
          <div data-layer="Button" class="button_37">
            <div data-layer="Label" class="label_37"><span class="label_37_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Small, Behavior=Default, Button=Large" class="component--actions1-breakpointsmall-behaviordefault-buttonlarge">
    <div data-layer="Divider" class="divider_25"></div>
    <div data-layer="Options" class="options_30">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_38">
        <div data-layer="ButtonBase" class="buttonbase_38">
          <div data-layer="Button" class="button_38">
            <div data-layer="Label" class="label_38"><span class="label_38_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Small, Behavior=Default, Button=Default" class="component--actions1-breakpointsmall-behaviordefault-buttondefault">
    <div data-layer="Divider" class="divider_26"></div>
    <div data-layer="Options" class="options_31">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_39">
        <div data-layer="ButtonBase" class="buttonbase_39">
          <div data-layer="Button" class="button_39">
            <div data-layer="Label" class="label_39"><span class="label_39_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Large, Behavior=Default, Button=Large" class="component--actions1-breakpointlarge-behaviordefault-buttonlarge">
    <div data-layer="Divider" class="divider_27"></div>
    <div data-layer="Frame 5243" class="frame-5243">
      <div data-layer="Options" class="options_32"></div>
      <div data-layer="Options" class="options_33">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_40">
          <div data-layer="ButtonBase" class="buttonbase_40">
            <div data-layer="Button" class="button_40">
              <div data-layer="Label" class="label_40"><span class="label_40_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=1, Breakpoint=Large, Behavior=Default, Button=Default" class="component--actions1-breakpointlarge-behaviordefault-buttondefault">
    <div data-layer="Options" class="options_34"></div>
    <div data-layer="Options" class="options_35">
      <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_41">
        <div data-layer="ButtonBase" class="buttonbase_41">
          <div data-layer="Button" class="button_41">
            <div data-layer="Label" class="label_41"><span class="label_41_span">Main action</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="# actions=No buttons, Breakpoint=Large, Behavior=Sticky, Button=Large" class="component--actionsno-buttons-breakpointlarge-behaviorsticky-buttonlarge">
    <div data-layer="Rectangle 703" class="rectangle-703"></div>
    <div data-layer=".Action Bar Component FInal" class="action-bar-component-final_01"></div>
  </div>
  <div data-layer="# actions=No buttons, Breakpoint=Large, Behavior=Sticky, Button=Default" class="component--actionsno-buttons-breakpointlarge-behaviorsticky-buttondefault">
    <div data-layer="Rectangle 703" class="rectangle-703_01"></div>
    <div data-layer=".Action Bar Component FInal" class="action-bar-component-final_02"></div>
  </div>
</div>

<style>
.divider {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label {
  text-align: center;
}

.label_01_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_01 {
  text-align: center;
}

.divider_01 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.divider_02 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.divider_03 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_02_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_02 {
  text-align: center;
}

.label_03_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_03 {
  text-align: center;
}

.rectangle {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.label_04_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_04 {
  text-align: center;
}

.label_05_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_05 {
  text-align: center;
}

.rectangle_01 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_01_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_01 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_04 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_06_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_06 {
  text-align: center;
}

.label_07_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_07 {
  text-align: center;
}

.rectangle_02 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_02_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_02 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_05 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_08_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_08 {
  text-align: center;
}

.label_09_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_09 {
  text-align: center;
}

.rectangle_03 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_03_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_03 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_06 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_10_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_10 {
  text-align: center;
}

.label_11_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_11 {
  text-align: center;
}

.rectangle_04 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_04_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_04 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_07 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_12_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_12 {
  text-align: center;
}

.rectangle_05 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_05_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_05 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_08 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.f4000cop_span {
  color: #0032A0;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
}

.text-74000-cop {
  align-self: stretch;
}

.porpasajero_span {
  color: #666666;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.por-pasajero {
  align-self: stretch;
}

.label_13_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_13 {
  text-align: center;
}

.rectangle_06 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_06_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_06 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_09 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_14_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_14 {
  text-align: center;
}

.rectangle_07 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_07_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_07 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_10 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.f4000cop_01_span {
  color: #0032A0;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
}

.text-74000-cop_01 {
  align-self: stretch;
}

.porpasajero_01_span {
  color: #666666;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.por-pasajero_01 {
  align-self: stretch;
}

.label_15_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_15 {
  text-align: center;
}

.rectangle_08 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_08_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_08 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.options_13 {
  flex: 1 1 0;
  height: 108px;
  padding: 24px;
}

.label_16_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_16 {
  text-align: center;
}

.rectangle_09 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_09_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_09 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_11 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.f4000cop_02_span {
  color: #0032A0;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
}

.text-74000-cop_02 {
  align-self: stretch;
}

.porpasajero_02_span {
  color: #666666;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.por-pasajero_02 {
  align-self: stretch;
}

.label_17_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_17 {
  text-align: center;
}

.rectangle_10 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_10_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_10 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.options_16 {
  flex: 1 1 0;
  align-self: stretch;
  padding: 24px;
}

.label_18_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_18 {
  text-align: center;
}

.rectangle_11 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_11_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_11 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_12 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.f4000cop_03_span {
  color: #0032A0;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
}

.text-74000-cop_03 {
  align-self: stretch;
}

.porpasajero_03_span {
  color: #666666;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.por-pasajero_03 {
  align-self: stretch;
}

.label_19_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_19 {
  text-align: center;
}

.divider_13 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_20_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_20 {
  text-align: center;
}

.label_21_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_21 {
  text-align: center;
}

.divider_14 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_22_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_22 {
  text-align: center;
}

.label_23_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_23 {
  text-align: center;
}

.divider_15 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_24_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_24 {
  text-align: center;
}

.label_25_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_25 {
  text-align: center;
}

.divider_16 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_26_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_26 {
  text-align: center;
}

.label_27_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_27 {
  text-align: center;
}

.rectangle_12 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_12_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_12 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_17 {
  width: 349px;
  height: 1px;
  position: relative;
}

.label_28_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_28 {
  text-align: center;
}

.label_29_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_29 {
  text-align: center;
}

.rectangle_13 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_13_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_13 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_18 {
  width: 349px;
  height: 1px;
  position: relative;
}

.label_30_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_30 {
  text-align: center;
}

.label_31_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_31 {
  text-align: center;
}

.rectangle_14 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_14_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_14 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_19 {
  width: 349px;
  height: 1px;
  position: relative;
}

.label_32_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_32 {
  text-align: center;
}

.rectangle_15 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_15_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_15 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_20 {
  width: 349px;
  height: 1px;
  position: relative;
}

.label_33_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_33 {
  text-align: center;
}

.rectangle_16 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_16_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_16 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_21 {
  width: 349px;
  height: 1px;
  position: relative;
}

.f4000cop_04_span {
  color: #0032A0;
  font-size: 18px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
}

.text-74000-cop_04 {
  align-self: stretch;
  text-align: center;
}

.porpasajero_04_span {
  color: #666666;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.por-pasajero_04 {
  align-self: stretch;
  text-align: center;
}

.label_34_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_34 {
  text-align: center;
}

.rectangle_17 {
  width: 112px;
  height: 36px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: white;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.10), 0px 5px 22px 4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
}

.scroll_17_span {
  color: #333333;
  font-size: 12px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.scroll_17 {
  left: 0px;
  top: 4px;
  position: absolute;
  text-align: center;
}

.divider_22 {
  width: 349px;
  height: 1px;
  position: relative;
}

.f4000cop_05_span {
  color: #0032A0;
  font-size: 18px;
  font-family: Gilroy;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
}

.text-74000-cop_05 {
  align-self: stretch;
  text-align: center;
}

.porpasajero_05_span {
  color: #666666;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.por-pasajero_05 {
  align-self: stretch;
  text-align: center;
}

.label_35_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_35 {
  text-align: center;
}

.divider_23 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_36_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_36 {
  text-align: center;
}

.divider_24 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_37_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_37 {
  text-align: center;
}

.divider_25 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_38_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_38 {
  text-align: center;
}

.divider_26 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_39_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_39 {
  text-align: center;
}

.divider_27 {
  width: 1200px;
  height: 1px;
  position: relative;
}

.options_32 {
  flex: 1 1 0;
  height: 108px;
  padding: 24px;
}

.label_40_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_40 {
  text-align: center;
}

.options_34 {
  flex: 1 1 0;
  height: 108px;
  padding: 24px;
}

.label_41_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_41 {
  text-align: center;
}

.rectangle-703 {
  width: 1200px;
  height: 50px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);
}

.rectangle-703_01 {
  align-self: stretch;
  height: 50px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);
}

.action-bar-component-final_01 {
  width: 1200px;
  height: 16px;
  left: 0px;
  top: 50px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

.action-bar-component-final_02 {
  align-self: stretch;
  height: 16px;
  position: relative;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

.button {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_01 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_02 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_03 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_04 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_05 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_06 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_07 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_08 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_09 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_10 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_11 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_12 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.price {
  flex: 1 1 0;
  height: 107px;
  padding-left: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
}

.button_13 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_14 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.price_01 {
  flex: 1 1 0;
  align-self: stretch;
  padding-left: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
}

.button_15 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_16 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.price_02 {
  width: 500px;
  align-self: stretch;
  padding-left: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
}

.button_17 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_18 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.price_03 {
  flex: 1 1 0;
  padding-left: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
}

.button_19 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_20 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_21 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_22 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_23 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_24 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_25 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_26 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_27 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_28 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_29 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_30 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_31 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_32 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_33 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.price_04 {
  align-self: stretch;
  height: 80px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button_34 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.price_05 {
  align-self: stretch;
  height: 80px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button_35 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_36 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_37 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_38 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_39 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_40 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_41 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.options_01 {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.options_02 {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.component--actionsno-buttons-breakpointlarge-behaviorsticky-buttonlarge {
  width: 1200px;
  height: 66px;
  left: 1447px;
  top: 2303px;
  position: absolute;
  overflow: hidden;
}

.component--actionsno-buttons-breakpointlarge-behaviorsticky-buttondefault {
  width: 1200px;
  left: 1447px;
  top: 2442px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonbase {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_01 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_02 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_03 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_04 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_05 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_06 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_07 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_08 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_09 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_10 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_11 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_12 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_13 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_14 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_15 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_16 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_17 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_18 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_19 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_20 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_21 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_22 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_23 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_24 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_25 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_26 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_27 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_28 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_29 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_30 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_31 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_32 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_33 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_34 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_35 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_36 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_37 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_38 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_39 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_40 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_41 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.component--actionsno-buttons-breakpointlarge-behaviordefault-buttonlarge {
  width: 1200px;
  min-height: 16px;
  left: 1354px;
  top: 32px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.component--actionsno-buttons-breakpointlarge-behaviordefault-buttondefault {
  width: 1200px;
  min-height: 16px;
  left: 1354px;
  top: 224px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.buttonrounded {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_01 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_02 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_03 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_04 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_05 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_06 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_07 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_08 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_09 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_10 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_11 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_12 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_13 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_14 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_15 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_16 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_17 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_18 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_19 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_20 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_21 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_22 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_23 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_24 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_25 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_26 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_27 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_28 {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_29 {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_30 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_31 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_32 {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_33 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_34 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_35 {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_36 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_37 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_38 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_39 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_40 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_41 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.frame-65 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_01 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_02 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_03 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_04 {
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_05 {
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_06 {
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_07 {
  width: 361px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.frame-65_08 {
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_09 {
  width: 361px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.frame-65_10 {
  flex: 1 1 0;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.frame-65_11 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.frame-65_12 {
  flex: 1 1 0;
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.btn {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.options_18 {
  align-self: stretch;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.options_19 {
  align-self: stretch;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.options_20 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_21 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_22 {
  width: 349px;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_23 {
  width: 349px;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_24 {
  width: 349px;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_25 {
  width: 349px;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_26 {
  width: 349px;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_27 {
  width: 349px;
  flex: 1 1 0;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_28 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_29 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_30 {
  align-self: stretch;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.options_31 {
  align-self: stretch;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.options_33 {
  flex: 1 1 0;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: flex;
}

.options_35 {
  flex: 1 1 0;
  align-self: stretch;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: flex;
}

.options {
  align-self: stretch;
  height: 108px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_03 {
  align-self: stretch;
  height: 92px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_04 {
  align-self: stretch;
  height: 108px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_05 {
  align-self: stretch;
  height: 92px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_06 {
  align-self: stretch;
  height: 108px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_07 {
  align-self: stretch;
  height: 92px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_08 {
  align-self: stretch;
  height: 108px;
  background: white;
  box-shadow: 0px 0px 24px 12px rgba(0, 0, 0, 0.11);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.frame-4913 {
  align-self: stretch;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.options_10 {
  align-self: stretch;
  height: 92px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action {
  align-self: stretch;
  flex: 1 1 0;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.options_12 {
  align-self: stretch;
  height: 108px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.action_01 {
  flex: 1 1 0;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.options_15 {
  align-self: stretch;
  height: 92px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.action_02 {
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
}

.component--actions2-breakpointsmall-behaviordefault-buttonlarge {
  width: 722px;
  left: 498px;
  top: 369px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.component--actions2-breakpointsmall-behaviordefault-buttondefault {
  width: 722px;
  left: 508px;
  top: 1211px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.component--actions2-breakpointxsmall-behaviordefault-buttonlarge {
  width: 349px;
  left: 498px;
  top: 689px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.component--actions2-breakpointxsmall-behaviordefault-buttondefault {
  width: 349px;
  left: 508px;
  top: 1479px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.frame-65_13 {
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.frame-65_14 {
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.frame-65_15 {
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.frame-65_16 {
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.action_03 {
  height: 156px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.action_04 {
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.component--actions1-breakpointxsmall-behaviordefault-buttonlarge {
  width: 349px;
  left: 871px;
  top: 689px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.component--actions1-breakpointxsmall-behaviordefault-buttondefault {
  width: 349px;
  left: 881px;
  top: 1479px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.component--actions1-breakpointsmall-behaviordefault-buttonlarge {
  width: 722px;
  left: 498px;
  top: 529px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.component--actions1-breakpointsmall-behaviordefault-buttondefault {
  width: 722px;
  left: 508px;
  top: 1338px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.frame-5243 {
  width: 1200px;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.component--actions1-breakpointlarge-behaviordefault-buttondefault {
  width: 1200px;
  left: 20px;
  top: 1084px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
}

.component--actions2-breakpointlarge-behaviordefault-buttonlarge {
  width: 1200px;
  left: 20px;
  top: 20px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.component--actions2-breakpointlarge-behaviordefault-buttondefault {
  width: 1200px;
  height: 92px;
  left: 20px;
  top: 941px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.options_09 {
  align-self: stretch;
  height: 108px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_11 {
  align-self: stretch;
  height: 92px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_14 {
  align-self: stretch;
  height: 108px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_17 {
  align-self: stretch;
  height: 92px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.frame-65_17 {
  height: 157px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.frame-65_18 {
  height: 157px;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.component--actions1-breakpointlarge-behaviordefault-buttonlarge {
  width: 1200px;
  left: 20px;
  top: 180px;
  position: absolute;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
}

.scrollindicator_01 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_01 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_01 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions2-breakpointlarge-behaviorsticky-buttondefault {
  width: 1200px;
  left: 47px;
  top: 3051px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_02 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_02 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_02 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions2-breakpointsmall-behaviorsticky-buttonlarge {
  width: 722px;
  left: 515px;
  top: 2219px;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_03 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_03 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_03 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions2-breakpointsmall-behaviorsticky-buttondefault {
  width: 722px;
  left: 525px;
  top: 3423px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_04 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_04 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_04 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions1-breakpointsmall-behaviorsticky-buttonlarge {
  width: 722px;
  left: 515px;
  top: 2433px;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_05 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_05 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_05 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actionsprice-breakpointsmall-behaviorsticky-buttonlarge {
  width: 722px;
  left: 526px;
  top: 4653px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_06 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_06 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_06 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions1-breakpointsmall-behaviorsticky-buttondefault {
  width: 722px;
  left: 525px;
  top: 3609px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_07 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_07 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_07 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actionsprice-breakpointsmall-behaviorsticky-buttondefault {
  width: 722px;
  left: 535px;
  top: 4867px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_08 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_08 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_08 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions1-breakpointlarge-behaviorsticky-buttonlarge {
  width: 1200px;
  left: 37px;
  top: 2017px;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_09 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_09 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_09 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actionsprice-breakpointlarge-behaviorsticky-buttonlarge {
  width: 1200px;
  left: 47px;
  top: 4328px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_10 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_10 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_10 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions1-breakpointlarge-behaviorsticky-buttondefault {
  width: 1200px;
  left: 47px;
  top: 3237px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_11 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_11 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_11 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actionsprice-breakpointlarge-behaviorsticky-buttondefault {
  width: 1200px;
  left: 57px;
  top: 4086px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_12 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_12 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_12 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions2-breakpointxsmall-behaviorsticky-buttonlarge {
  width: 349px;
  left: 521px;
  top: 2673px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_13 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_13 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_13 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions2-breakpointxsmall-behaviorsticky-buttondefault {
  width: 349px;
  left: 531px;
  top: 3807px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_14 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_14 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_14 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions1-breakpointxsmall-behaviorsticky-buttonlarge {
  width: 349px;
  left: 894px;
  top: 2673px;
  position: absolute;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_15 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_15 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_15 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions1-breakpointxsmall-behaviorsticky-buttondefault {
  width: 349px;
  left: 904px;
  top: 3807px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_16 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_16 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_16 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actionsprice-breakpointxsmall-behaviorsticky-buttondefault {
  width: 349px;
  left: 498px;
  top: 5202px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator_17 {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4_17 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator_17 {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actionsprice-breakpointxsmall-behaviorsticky-buttonlarge {
  width: 349px;
  left: 924px;
  top: 5202px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.scrollindicator {
  left: 33.50px;
  top: 0px;
  position: absolute;
}

.group-4 {
  width: 58px;
  height: 24px;
  left: 33.50px;
  top: 6px;
  position: absolute;
  overflow: hidden;
}

.scroll-indicator {
  width: 112px;
  height: 36px;
  position: relative;
}

.component--actions2-breakpointlarge-behaviorsticky-buttonlarge {
  width: 1200px;
  left: 44px;
  top: 1803px;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: inline-flex;
}

.action-bar-component-final {
  width: 3071px;
  height: 5570px;
  position: relative;
  background: #F6F6F6;
  overflow: hidden;
  border-radius: 5px;
  border: 1px #7B61FF solid;
}
</style>
```

## Modal

```
<div data-layer="Modal" class="modal">
  <div data-layer="Breakpoint=Large, Size=Wide" class="breakpointlarge-sizewide">
    <div data-layer="ModalClose" data-type="Default" class="modalclose">
      <div data-svg-wrapper data-layer="Cross" class="cross">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4997L20.0013 17.6663L13.0013 10.4997L10.5013 12.9997L17.668 19.9997L10.5013 26.9997L13.0013 29.4997L20.0013 22.333L27.0013 29.4997L29.5013 26.9997L22.3347 19.9997L29.5013 12.9997L27.0013 10.4997Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area"></div>
    <div data-layer="Scroll" data-property-1="Down" class="scroll">
      <div data-layer="Rectangle 644" class="rectangle-644"></div>
      <div data-layer="Rectangle 645" class="rectangle-645"></div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="Large" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final">
      <div data-layer="Options" class="options">
        <div data-layer="Divider" class="divider"></div>
        <div data-layer="Frame 65" class="frame-65">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded">
            <div data-layer="ButtonBase" class="buttonbase">
              <div data-layer="Button" class="button">
                <div data-layer="Label" class="label"><span class="label_span">Secondary Action</span></div>
              </div>
            </div>
          </div>
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_01">
            <div data-layer="ButtonBase" class="buttonbase_01">
              <div data-layer="Button" class="button_01">
                <div data-layer="Label" class="label_01"><span class="label_01_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=Large, Size=Normal" class="breakpointlarge-sizenormal">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_01">
      <div data-svg-wrapper data-layer="Cross" class="cross_01">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0012 10.4997L20.0012 17.6663L13.0012 10.4997L10.5012 12.9997L17.6679 19.9997L10.5012 26.9997L13.0012 29.4997L20.0012 22.333L27.0012 29.4997L29.5012 26.9997L22.3346 19.9997L29.5012 12.9997L27.0012 10.4997Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_01">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_01">
        <div data-layer="Rectangle 644" class="rectangle-644_01"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_01"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="Large" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_01">
      <div data-layer="Options" class="options_01">
        <div data-layer="Divider" class="divider_01"></div>
        <div data-layer="Frame 65" class="frame-65_01">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_02">
            <div data-layer="ButtonBase" class="buttonbase_02">
              <div data-layer="Button" class="button_02">
                <div data-layer="Label" class="label_02"><span class="label_02_span">Secondary Action</span></div>
              </div>
            </div>
          </div>
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_03">
            <div data-layer="ButtonBase" class="buttonbase_03">
              <div data-layer="Button" class="button_03">
                <div data-layer="Label" class="label_03"><span class="label_03_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=Large, Size=Narrow" class="breakpointlarge-sizenarrow">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_02">
      <div data-svg-wrapper data-layer="Cross" class="cross_02">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0012 10.4997L20.0012 17.6663L13.0012 10.4997L10.5012 12.9997L17.6679 19.9997L10.5012 26.9997L13.0012 29.4997L20.0012 22.333L27.0012 29.4997L29.5012 26.9997L22.3346 19.9997L29.5012 12.9997L27.0012 10.4997Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_02">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_02">
        <div data-layer="Rectangle 644" class="rectangle-644_02"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_02"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="XSmall" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_02">
      <div data-layer="Divider" class="divider_02"></div>
      <div data-layer="Options" class="options_02">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_04">
          <div data-layer="ButtonBase" class="buttonbase_04">
            <div data-layer="Button" class="button_04">
              <div data-layer="Label" class="label_04"><span class="label_04_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_05">
          <div data-layer="ButtonBase" class="buttonbase_05">
            <div data-layer="Button" class="button_05">
              <div data-layer="Label" class="label_05"><span class="label_05_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=Medium, Size=Narrow" class="breakpointmedium-sizenarrow">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_03">
      <div data-svg-wrapper data-layer="Cross" class="cross_03">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0012 10.4997L20.0012 17.6664L13.0012 10.4997L10.5012 12.9997L17.6679 19.9997L10.5012 26.9997L13.0012 29.4997L20.0012 22.333L27.0012 29.4997L29.5012 26.9997L22.3346 19.9997L29.5012 12.9997L27.0012 10.4997Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_03">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_03">
        <div data-layer="Rectangle 644" class="rectangle-644_03"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_03"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="XSmall" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_03">
      <div data-layer="Divider" class="divider_03"></div>
      <div data-layer="Options" class="options_03">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_06">
          <div data-layer="ButtonBase" class="buttonbase_06">
            <div data-layer="Button" class="button_06">
              <div data-layer="Label" class="label_06"><span class="label_06_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_07">
          <div data-layer="ButtonBase" class="buttonbase_07">
            <div data-layer="Button" class="button_07">
              <div data-layer="Label" class="label_07"><span class="label_07_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=Medium, Size=Normal" class="breakpointmedium-sizenormal">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_04">
      <div data-svg-wrapper data-layer="Cross" class="cross_04">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4997L20.0013 17.6664L13.0013 10.4997L10.5013 12.9997L17.668 19.9997L10.5013 26.9997L13.0013 29.4997L20.0013 22.333L27.0013 29.4997L29.5013 26.9997L22.3347 19.9997L29.5013 12.9997L27.0013 10.4997Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_04">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_04">
        <div data-layer="Rectangle 644" class="rectangle-644_04"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_04"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="Large" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_04">
      <div data-layer="Options" class="options_04">
        <div data-layer="Divider" class="divider_04"></div>
        <div data-layer="Frame 65" class="frame-65_02">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_08">
            <div data-layer="ButtonBase" class="buttonbase_08">
              <div data-layer="Button" class="button_08">
                <div data-layer="Label" class="label_08"><span class="label_08_span">Secondary Action</span></div>
              </div>
            </div>
          </div>
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_09">
            <div data-layer="ButtonBase" class="buttonbase_09">
              <div data-layer="Button" class="button_09">
                <div data-layer="Label" class="label_09"><span class="label_09_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=Small, Size=Narrow" class="breakpointsmall-sizenarrow">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_05">
      <div data-svg-wrapper data-layer="Cross" class="cross_05">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0012 10.4996L20.0012 17.6663L13.0012 10.4996L10.5012 12.9996L17.6679 19.9996L10.5012 26.9996L13.0012 29.4996L20.0012 22.333L27.0012 29.4996L29.5012 26.9996L22.3346 19.9996L29.5012 12.9996L27.0012 10.4996Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_05">
      <div data-layer="Scroll" class="scroll_05">
        <div data-layer="Rectangle 644" class="rectangle-644_05"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_05"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="XSmall" data-button="Default" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_05">
      <div data-layer="Divider" class="divider_05"></div>
      <div data-layer="Options" class="options_05">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_10">
          <div data-layer="ButtonBase" class="buttonbase_10">
            <div data-layer="Button" class="button_10">
              <div data-layer="Label" class="label_10"><span class="label_10_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_11">
          <div data-layer="ButtonBase" class="buttonbase_11">
            <div data-layer="Button" class="button_11">
              <div data-layer="Label" class="label_11"><span class="label_11_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=Medium, Size=Wide" class="breakpointmedium-sizewide">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_06">
      <div data-svg-wrapper data-layer="Cross" class="cross_06">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4997L20.0013 17.6664L13.0013 10.4997L10.5013 12.9997L17.6679 19.9997L10.5013 26.9997L13.0013 29.4997L20.0013 22.333L27.0013 29.4997L29.5013 26.9997L22.3346 19.9997L29.5013 12.9997L27.0013 10.4997Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_06"></div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="Large" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_06">
      <div data-layer="Options" class="options_06">
        <div data-layer="Divider" class="divider_06"></div>
        <div data-layer="Frame 65" class="frame-65_03">
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_12">
            <div data-layer="ButtonBase" class="buttonbase_12">
              <div data-layer="Button" class="button_12">
                <div data-layer="Label" class="label_12"><span class="label_12_span">Secondary Action</span></div>
              </div>
            </div>
          </div>
          <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_13">
            <div data-layer="ButtonBase" class="buttonbase_13">
              <div data-layer="Button" class="button_13">
                <div data-layer="Label" class="label_13"><span class="label_13_span">Main action</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-layer="Scroll" data-property-1="Down" class="scroll_06">
      <div data-layer="Rectangle 644" class="rectangle-644_06"></div>
      <div data-layer="Rectangle 645" class="rectangle-645_06"></div>
    </div>
  </div>
  <div data-layer="Breakpoint=Small, Size=Wide" class="breakpointsmall-sizewide">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_07">
      <div data-svg-wrapper data-layer="Cross" class="cross_07">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4996L20.0013 17.6663L13.0013 10.4996L10.5013 12.9996L17.6679 19.9996L10.5013 26.9996L13.0013 29.4996L20.0013 22.333L27.0013 29.4996L29.5013 26.9996L22.3346 19.9996L29.5013 12.9996L27.0013 10.4996Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_07">
      <div data-layer=".Content Area Slot" data-show-slot-area="true" class="content-area-slot">
        <div data-layer="Frame 5240" class="frame-5240"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="Small" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_07">
      <div data-layer="Divider" class="divider_07"></div>
      <div data-layer="Options" class="options_07">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_14">
          <div data-layer="ButtonBase" class="buttonbase_14">
            <div data-layer="Button" class="button_14">
              <div data-layer="Label" class="label_14"><span class="label_14_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_15">
          <div data-layer="ButtonBase" class="buttonbase_15">
            <div data-layer="Button" class="button_15">
              <div data-layer="Label" class="label_15"><span class="label_15_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-layer="Scroll" data-property-1="Down" class="scroll_07">
      <div data-layer="Rectangle 644" class="rectangle-644_07"></div>
      <div data-layer="Rectangle 645" class="rectangle-645_07"></div>
    </div>
  </div>
  <div data-layer="Breakpoint=Small, Size=Normal" class="breakpointsmall-sizenormal">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_08">
      <div data-svg-wrapper data-layer="Cross" class="cross_08">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4996L20.0013 17.6663L13.0013 10.4996L10.5013 12.9996L17.668 19.9996L10.5013 26.9996L13.0013 29.4996L20.0013 22.333L27.0013 29.4996L29.5013 26.9996L22.3347 19.9996L29.5013 12.9996L27.0013 10.4996Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_08">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_08">
        <div data-layer="Rectangle 644" class="rectangle-644_08"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_08"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="Small" data-button="Large" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_08">
      <div data-layer="Divider" class="divider_08"></div>
      <div data-layer="Options" class="options_08">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_16">
          <div data-layer="ButtonBase" class="buttonbase_16">
            <div data-layer="Button" class="button_16">
              <div data-layer="Label" class="label_16"><span class="label_16_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="Large" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_17">
          <div data-layer="ButtonBase" class="buttonbase_17">
            <div data-layer="Button" class="button_17">
              <div data-layer="Label" class="label_17"><span class="label_17_span">Main action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=XSmall, Size=Wide" class="breakpointxsmall-sizewide">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_09">
      <div data-svg-wrapper data-layer="Cross" class="cross_09">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4998L20.0013 17.6664L13.0013 10.4998L10.5013 12.9998L17.668 19.9998L10.5013 26.9998L13.0013 29.4998L20.0013 22.3331L27.0013 29.4998L29.5013 26.9998L22.3346 19.9998L29.5013 12.9998L27.0013 10.4998Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_09"></div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="XSmall" data-button="Default" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_09">
      <div data-layer="Divider" class="divider_09"></div>
      <div data-layer="Options" class="options_09">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_18">
          <div data-layer="ButtonBase" class="buttonbase_18">
            <div data-layer="Button" class="button_18">
              <div data-layer="Label" class="label_18"><span class="label_18_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_19">
          <div data-layer="ButtonBase" class="buttonbase_19">
            <div data-layer="Button" class="button_19">
              <div data-layer="Label" class="label_19"><span class="label_19_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-layer="Scroll" data-property-1="Down" class="scroll_09">
      <div data-layer="Rectangle 644" class="rectangle-644_09"></div>
      <div data-layer="Rectangle 645" class="rectangle-645_09"></div>
    </div>
  </div>
  <div data-layer="Breakpoint=XSmall, Size=Normal" class="breakpointxsmall-sizenormal">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_10">
      <div data-svg-wrapper data-layer="Cross" class="cross_10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0013 10.4998L20.0013 17.6664L13.0013 10.4998L10.5013 12.9998L17.668 19.9998L10.5013 26.9998L13.0013 29.4998L20.0013 22.3331L27.0013 29.4998L29.5013 26.9998L22.3347 19.9998L29.5013 12.9998L27.0013 10.4998Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_10">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_10">
        <div data-layer="Rectangle 644" class="rectangle-644_10"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_10"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="XSmall" data-button="Default" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_10">
      <div data-layer="Divider" class="divider_10"></div>
      <div data-layer="Options" class="options_10">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_20">
          <div data-layer="ButtonBase" class="buttonbase_20">
            <div data-layer="Button" class="button_20">
              <div data-layer="Label" class="label_20"><span class="label_20_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_21">
          <div data-layer="ButtonBase" class="buttonbase_21">
            <div data-layer="Button" class="button_21">
              <div data-layer="Label" class="label_21"><span class="label_21_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Breakpoint=XSmall, Size=Narrow" class="breakpointxsmall-sizenarrow">
    <div data-layer="ModalClose" data-type="Default" class="modalclose_11">
      <div data-svg-wrapper data-layer="Cross" class="cross_11">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.0012 10.4998L20.0012 17.6664L13.0012 10.4998L10.5012 12.9998L17.6679 19.9998L10.5012 26.9998L13.0012 29.4998L20.0012 22.3331L27.0012 29.4998L29.5012 26.9998L22.3346 19.9998L29.5012 12.9998L27.0012 10.4998Z" fill="#0032A0"/>
        </svg>
      </div>
    </div>
    <div data-layer="Content Area" class="content-area_11">
      <div data-layer="Scroll" data-property-1="Down" class="scroll_11">
        <div data-layer="Rectangle 644" class="rectangle-644_11"></div>
        <div data-layer="Rectangle 645" class="rectangle-645_11"></div>
      </div>
    </div>
    <div data-layer=".Action Bar Component FInal" data-="2" data-behavior="Default" data-breakpoint="XSmall" data-button="Default" data-scroll-indicator="true" data-show-price="true" class="action-bar-component-final_11">
      <div data-layer="Divider" class="divider_11"></div>
      <div data-layer="Options" class="options_11">
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="solidPrimaryMain" class="buttonrounded_22">
          <div data-layer="ButtonBase" class="buttonbase_22">
            <div data-layer="Button" class="button_22">
              <div data-layer="Label" class="label_22"><span class="label_22_span">Main action</span></div>
            </div>
          </div>
        </div>
        <div data-layer="buttonRounded" data-content="No Icon" data-size="default" data-state="Idle" data-style="OutlinePrimaryMain" class="buttonrounded_23">
          <div data-layer="ButtonBase" class="buttonbase_23">
            <div data-layer="Button" class="button_23">
              <div data-layer="Label" class="label_23"><span class="label_23_span">Secondary Action</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.rectangle-644 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645 {
  width: 10px;
  height: 269.13px;
  left: 0px;
  top: 338.87px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label {
  text-align: center;
}

.label_01_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_01 {
  text-align: center;
}

.rectangle-644_01 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_01 {
  width: 10px;
  height: 185.03px;
  left: 0px;
  top: 232.97px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_01 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_02_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_02 {
  text-align: center;
}

.label_03_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_03 {
  text-align: center;
}

.rectangle-644_02 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_02 {
  width: 10px;
  height: 181.93px;
  left: 0px;
  top: 229.07px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_02 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_04_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_04 {
  text-align: center;
}

.label_05_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_05 {
  text-align: center;
}

.rectangle-644_03 {
  flex: 1 1 0;
  height: 497px;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_03 {
  width: 10px;
  height: 169.09px;
  left: 0px;
  top: 212.91px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_03 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_06_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_06 {
  text-align: center;
}

.label_07_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_07 {
  text-align: center;
}

.rectangle-644_04 {
  flex: 1 1 0;
  height: 497px;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_04 {
  width: 10px;
  height: 185.47px;
  left: 0px;
  top: 233.53px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_04 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_08_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_08 {
  text-align: center;
}

.label_09_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_09 {
  text-align: center;
}

.rectangle-644_05 {
  width: 10px;
  flex: 1 1 0;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_05 {
  width: 10px;
  height: 176.18px;
  left: 0px;
  top: 221.82px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_05 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_10_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_10 {
  text-align: center;
}

.label_11_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_11 {
  text-align: center;
}

.divider_06 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_12_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_12 {
  text-align: center;
}

.label_13_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_13 {
  text-align: center;
}

.rectangle-644_06 {
  flex: 1 1 0;
  height: 497px;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_06 {
  width: 10px;
  height: 270.91px;
  left: 0px;
  top: 341.09px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_07 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_14_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_14 {
  text-align: center;
}

.label_15_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_15 {
  text-align: center;
}

.rectangle-644_07 {
  flex: 1 1 0;
  height: 497px;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_07 {
  width: 10px;
  height: 266.04px;
  left: 0px;
  top: 334.96px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.rectangle-644_08 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_08 {
  width: 10px;
  height: 310.30px;
  left: 0px;
  top: 390.70px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_08 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_16_span {
  color: #0032A0;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_16 {
  text-align: center;
}

.label_17_span {
  color: white;
  font-size: 16px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
}

.label_17 {
  text-align: center;
}

.divider_09 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_18_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_18 {
  text-align: center;
}

.label_19_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_19 {
  text-align: center;
}

.rectangle-644_09 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_09 {
  width: 10px;
  height: 182.37px;
  left: 0px;
  top: 229.63px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.rectangle-644_10 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_10 {
  width: 10px;
  height: 192.56px;
  left: 0px;
  top: 242.44px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_10 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_20_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_20 {
  text-align: center;
}

.label_21_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_21 {
  text-align: center;
}

.rectangle-644_11 {
  flex: 1 1 0;
  align-self: stretch;
  background: #EFEFEE;
  border-radius: 8px;
}

.rectangle-645_11 {
  width: 10px;
  height: 192.56px;
  left: 0px;
  top: 242.44px;
  position: absolute;
  background: #DBDAD8;
  border-radius: 8px;
}

.divider_11 {
  align-self: stretch;
  height: 1px;
  position: relative;
}

.label_22_span {
  color: white;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_22 {
  text-align: center;
}

.label_23_span {
  color: #0032A0;
  font-size: 14px;
  font-family: Suisse Int'l;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.label_23 {
  text-align: center;
}

.frame-5240 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
}

.content-area {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 56px;
  padding-right: 56px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.button {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_01 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_02 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_03 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_04 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_05 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_06 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_07 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_08 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_09 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_10 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_11 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.content-area_06 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 56px;
  padding-right: 56px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.button_12 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_13 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_14 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_15 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_16 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 56px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_17 {
  align-self: stretch;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #0032A0;
  border-radius: 56px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.content-area_09 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.button_18 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_19 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_20 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_21 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_22 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #0032A0;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.button_23 {
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  outline: 1px #0032A0 solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
}

.scroll {
  width: 10px;
  height: 608px;
  left: 1167px;
  top: 48px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_01 {
  width: 10px;
  height: 418px;
  left: 765px;
  top: -0.36px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_02 {
  width: 10px;
  height: 411px;
  left: 379px;
  top: -0.36px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_03 {
  width: 10px;
  height: 382px;
  left: 379px;
  top: 0px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_04 {
  width: 10px;
  height: 419px;
  left: 575px;
  top: 0px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_05 {
  height: 398px;
  left: 375px;
  top: 0px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.scroll_06 {
  width: 10px;
  height: 612px;
  left: 877px;
  top: 48px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_07 {
  width: 10px;
  height: 601px;
  left: 747px;
  top: 48px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_08 {
  width: 10px;
  height: 701px;
  left: 535px;
  top: 0px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_09 {
  width: 10px;
  height: 412px;
  left: 336px;
  top: 63px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_10 {
  width: 10px;
  height: 435px;
  left: 336px;
  top: 0px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.scroll_11 {
  width: 10px;
  height: 435px;
  left: 336px;
  top: 0px;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
}

.content-area-slot {
  align-self: stretch;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
}

.buttonbase {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_01 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_02 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_03 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_04 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_05 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_06 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_07 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_08 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_09 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_10 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_11 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_12 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_13 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_14 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_15 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_16 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_17 {
  align-self: stretch;
  padding: 2px;
  border-radius: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_18 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_19 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_20 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_21 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_22 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.buttonbase_23 {
  align-self: stretch;
  padding: 2px;
  border-radius: 44px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
}

.content-area_01 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 56px;
  padding-right: 56px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  display: flex;
}

.content-area_02 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  display: flex;
}

.content-area_03 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.content-area_04 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.content-area_05 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.content-area_08 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.content-area_10 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.content-area_11 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.content-area_07 {
  align-self: stretch;
  flex: 1 1 0;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.buttonrounded {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_01 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_02 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_03 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_04 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_05 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_06 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_07 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_08 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_09 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_10 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_11 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_12 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_13 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_14 {
  width: 329px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_15 {
  width: 329px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_16 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_17 {
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonrounded_18 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_19 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_20 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_21 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_22 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.buttonrounded_23 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.frame-65 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.frame-65_01 {
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.options_02 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_03 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.frame-65_02 {
  align-self: stretch;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.options_05 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.frame-65_03 {
  width: 700px;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.options_07 {
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.options_08 {
  align-self: stretch;
  padding: 24px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.options_09 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_10 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options_11 {
  align-self: stretch;
  padding: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
}

.options {
  align-self: stretch;
  height: 108px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_01 {
  align-self: stretch;
  height: 108px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_02 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_03 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_04 {
  align-self: stretch;
  height: 108px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_05 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.options_06 {
  align-self: stretch;
  height: 108px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_07 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_08 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_09 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_10 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final_11 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.action-bar-component-final {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.action-bar-component-final_01 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.action-bar-component-final_04 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.action-bar-component-final_06 {
  align-self: stretch;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.cross_01 {
  position: relative;
}

.modalclose_01 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointlarge-sizenormal {
  width: 798px;
  height: 576px;
  left: 1429px;
  top: 90.36px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_02 {
  position: relative;
}

.modalclose_02 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointlarge-sizenarrow {
  width: 392px;
  height: 588px;
  left: 2368px;
  top: 90.36px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_03 {
  position: relative;
}

.modalclose_03 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointmedium-sizenarrow {
  width: 392px;
  height: 576px;
  left: 2368px;
  top: 952px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_04 {
  position: relative;
}

.modalclose_04 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointmedium-sizenormal {
  width: 600px;
  height: 576px;
  left: 1429px;
  top: 960px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_05 {
  position: relative;
}

.modalclose_05 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointsmall-sizenarrow {
  width: 392px;
  height: 576px;
  left: 2368px;
  top: 1890px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_06 {
  position: relative;
}

.modalclose_06 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointmedium-sizewide {
  width: 910px;
  height: 768px;
  left: 90px;
  top: 944px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_07 {
  position: relative;
}

.modalclose_07 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointsmall-sizewide {
  width: 768px;
  height: 758px;
  left: 90px;
  top: 1890px;
  position: absolute;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_08 {
  position: relative;
}

.modalclose_08 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointsmall-sizenormal {
  width: 560px;
  height: 758px;
  left: 1355px;
  top: 1890px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_09 {
  position: relative;
}

.modalclose_09 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointxsmall-sizewide {
  width: 349px;
  height: 604px;
  left: 94px;
  top: 2917px;
  position: absolute;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_10 {
  position: relative;
}

.modalclose_10 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointxsmall-sizenormal {
  width: 349px;
  height: 604px;
  left: 1370px;
  top: 2925px;
  position: absolute;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross_11 {
  position: relative;
}

.modalclose_11 {
  align-self: stretch;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointxsmall-sizenarrow {
  width: 349px;
  height: 604px;
  left: 2368px;
  top: 2925px;
  position: absolute;
  background: white;
  box-shadow: 0px -8px 32px 12px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.cross {
  position: relative;
}

.modalclose {
  width: 1200px;
  padding-top: 8px;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: flex-start;
  display: inline-flex;
}

.breakpointlarge-sizewide {
  width: 1200px;
  height: 768px;
  left: 90px;
  top: 90px;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 20px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.modal {
  width: 2879px;
  height: 3738px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  border: 1px #9747FF solid;
}
</style>
```
