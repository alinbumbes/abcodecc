//counter example with web-components

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.getElementById("template");
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.valueHeader = this.shadowRoot.querySelector("h3");
    this.valueHeader.innerHTML = this.value;
    this.substractBtn = this.shadowRoot.querySelector("#subtract");
    this.addBtn = this.shadowRoot.querySelector("#add");
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  connectedCallback() {
    this.addBtn.addEventListener("click", this.add);
    this.substractBtn.addEventListener("click", this.substract);
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(val) {
    this.setAttribute("value", val);
  }

  substract() {
    this.value = +this.value - 1;
  }

  add() {
    this.value = +this.value + 1;
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    this.valueHeader.innerHTML = this.value;
  }

  disconnectedCallback() {
    this.substractBtn.addEventListener("click", this.substract);
    this.addBtn.addEventListener("click", this.add);
  }
}
customElements.define("lut-counter", Card);

//tab component

function getTabs() {
  const tabs = Array.from(
    document.querySelectorAll('[role="tablist"] [role="tab"]')
  );
  return tabs;
}

function getPanels() {
  const panels = Array.from(document.querySelectorAll('[role="panel"]'));
  console.log(panels);
  return panels;
}

function selectTab(elem, index) {
  const tabs = getTabs();
  const panels = getPanels();

  for (const tab of tabs) {
    tab.setAttribute("aria-selected", false);
  }

  for (const panel of panels) {
    panel.hidden = true;
    panel.setAttribute("aria-selected", false);
  }

  const selectedTab = tabs[index];
  const selectedPanel = panels[index];

  selectedTab.focus();
  selectedTab.setAttribute("aria-selected", true);

  selectedPanel.hidden = false;
  selectedPanel.setAttribute("aria-selected", true);
  elem.dispatchEvent(
    new Event("lut-tab-changed", {
      bubbles: true,
      details: {
        relatedTarget: selectedPanel,
      },
    })
  );
}

class Tabs extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", (event) => {
      console.log("i am clicked ");
      // Get all tabs
      const tabs = getTabs();
      // Find tab that was clicked
      const tab = event.target.closest('[role="tab"]');
      if (!tab?.closest('[role="tablist"]')) return;
      // Get index of tab that was clicked
      const index = tabs.indexOf(tab);
      selectTab(this, index);
    });
  }
}
customElements.define("lut-tabs", Tabs);
