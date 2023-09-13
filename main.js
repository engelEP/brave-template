export const AnimateText = (button) => {
  
    const text = [...button.innerHTML];
    let delay = 0;

    const buttonText = document.createElement('span');
    buttonText.innerHTML = button.innerHTML;
    buttonText.classList.add('Animation-placeholder');

    button.innerHTML = "";
    text.forEach(element => {
        const span = document.createElement('span');
        span.classList.add('Animation-text');
        span.innerHTML = element.trim() ? element : "&nbsp;";
        span.style.transition = `all .20s ease ${delay+=0.03}s, color 0s ease`;
        button.appendChild(span);
    });

    button.appendChild(buttonText);
}

const buttonGreenEnergy = document.getElementById('button-green-energy');
const buttonAboutUs = document.getElementById('button-AboutUs');
const buttonPanelInstallation = document.getElementById('button-panel-installation');
const buttonEnergyStorage = document.getElementById('button-energy-storage');
const buttonPanelSale = document.getElementById('button-panel-sale');
const buttonCommercialPanel = document.getElementById('button-commercial-panel');
const buttonConsultation = document.getElementById('button-consultation');
const buttonFooter = document.getElementById('button-footer');

AnimateText(buttonGreenEnergy);
AnimateText(buttonAboutUs);
AnimateText(buttonPanelInstallation);
AnimateText(buttonEnergyStorage);
AnimateText(buttonPanelSale);
AnimateText(buttonCommercialPanel);
AnimateText(buttonConsultation);
AnimateText(buttonFooter);