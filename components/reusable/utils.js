import config_all from "../../config/config";
function openMap() {
  const config = config_all();
  const newWindow = window.open(
    config.siteConfig.contact.map,
    "_blank",
    "noopener,noreferrer"
  );
  if (newWindow) newWindow.opener = null;
}

export { openMap };
