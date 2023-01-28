import RetroAppleInspiredModal from "./lib/component/RetroAppleInspiredModal.js";
import { useState } from "react";

function RetroModal() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenModal((toggle) => !toggle);
  };

  const customText =
    "This is a standard alert box. The text would be placed here. This is where more text appears";

  const customIcone = <p>🛎️</p>;

  return (
    <div className="RetroAppleInspiredModal">
      {/* set your trigger button here */}
      <button onClick={handleModal}>To replace by your trigger button</button>
      {/* retro Apple alert box here below */}
      <RetroAppleInspiredModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        customText={customText}
        customIcone={customIcone}
      />
    </div>
  );
}

export default RetroModal;
