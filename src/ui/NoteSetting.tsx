import { BsPencil } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import Modal from "./Modal";

export default function NoteSetting({ id }: number) {
  const cssEffect =
    "opacity-25 hover:text-[--color-brand-700] hover:opacity-90 transition-opacity transition-colors duration-300 ease-in-out";

  function onEdit() {}
  function onDelete() {
    console.log(id);
  }

  return (
    <div className="flex gap-5">
      <span className={cssEffect} onClick={onEdit}>
        <BsPencil size={20} />
      </span>
      <span className={cssEffect} onClick={onDelete}>
        <Modal>
          <button></button>
          <Modal.Open opens="delete">
            <button>
              <BsTrash3 size={20} />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <button>Confirm Delete</button>
          </Modal.Window>
        </Modal>
      </span>
    </div>
  );
}

// <Modal>
//         <button>Delete</button>

//         <Modal.Open opens="delete">
//           <button>Delete note</button>
//         </Modal.Open>
//         <Modal.Window name="delete">
//           <button>Confirm Delete</button>
//         </Modal.Window>
//       </Modal>

{
  /* <Modal>
{/* <Button
  variation="danger"
  onClick={() => deleteBookings(bookingId)}
  disabled={deletingBooking}
>
  Delete
</Button> */
}
{
  /*
<Modal.Open opens="delete">
  <Button variation="danger">Delete Booking</Button>
</Modal.Open>

<Modal.Window name="delete">
  {/* Open this */
}
{
  /* <CreateCabinForm cabinToEdit={{}} /> */
}
/*<ConfirmDelete
    disabled={deletingBooking}
    onConfirm={() =>
      deleteBookings(bookingId, { onSettled: () => navigate(-1) })
    }
    resourceName={"booking"}
  />
</Modal.Window>
</Modal> */
