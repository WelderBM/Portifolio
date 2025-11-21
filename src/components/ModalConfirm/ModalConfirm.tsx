import React, { useEffect } from "react";
import "./ModalConfirm.css";

interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  projectName: string;
}

export const ModalConfirm: React.FC<ModalConfirmProps> = ({
  isOpen,
  onClose,
  onConfirm,
  projectName,
}) => {
  // 🔒 Bloqueia scroll ao abrir / 🔓 Libera ao fechar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // limpa caso o componente seja desmontado
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Abrir projeto?</h2>
        <p>
          Você deseja visitar o projeto <strong>{projectName}</strong>?
        </p>

        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Visitar
          </button>
        </div>
      </div>
    </div>
  );
};
