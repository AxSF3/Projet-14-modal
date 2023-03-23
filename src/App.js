import modal from "./lib/component/modal.js";
import { useState } from "react";

function modal() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenModal((toggle) => !toggle);
  };

  const customText =
    "Employee created";

  const customIcone = <p>🛎️</p>;

  return (
    <div className="modal">
      {/* set your trigger button here */}
      <button onClick={handleModal}>To replace by your trigger button</button>
      {/* alert box here below */}
      <RetroAppleInspiredModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        customText={customText}
        customIcone={customIcone}
      />
    </div>
  );
}

export default modal;
