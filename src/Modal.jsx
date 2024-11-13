function Modal({ show, close, content }) {
  return (
    <div
      onClick={close}
      className={`${show ? "" : "hidden"} fixed inset-0 z-50`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="rounded-lg bg-neutral-950 p-6">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
