import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalServicesProps = {
  open: boolean;
  handleCloseServicesModal: () => void;
};
export default function ModalServices({
  open,
  handleCloseServicesModal,
}: ModalServicesProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseServicesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span>valar mogulhis</span>
        </Box>
      </Modal>
    </div>
  );
}
