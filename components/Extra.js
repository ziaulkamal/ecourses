const Modal = () => {
    return (
        <div id="popup-newsletter-block">
        <div className="popup-newsletter-main">
          <div className="bg-img">
            {" "}
            <img
              className="w-100 h-100"
              src="assets/images/component/392x280.png"
              alt=""
            />
          </div>
          <div className="content">
            <div className="close-block text-end">
              <i className="ph-bold ph-x d-block fs-18 pointer" />
            </div>
            <div className="heading4">Get Our Newsletter</div>
            <div className="caption1 text-on-surface-variant1 mt-16">
              Gain access to in-depth articles and analysis from our team of IT
              experts.
            </div>
            <form className="mt-32">
              <div className="form-input">
                <input type="text" placeholder="Email" />
                <button>
                  <i className="ph ph-paper-plane-tilt text-on-surface-variant1" />
                </button>
              </div>
              <div className="flex-item-center gap-8 mt-12">
                <input
                  className="prevent-popup-input"
                  type="checkbox"
                  name="prevent"
                />
                <div className="caption1 text-on-surface-variant1">
                  Prevent this Pop-up
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

const SweetAlert = () =>{
    return (
        <div className="confirm-delete-modal">
            <div className="confirm-delete-modal-container flex-center p-40 bg-white bora-24">
            <div className="main-content">
                <div className="body2 text-center">
                Are you sure you want to delete this product?
                </div>
                <div className="flex-item-center gap-12 mt-16">
                <div className="delete button bg-critical text-white border-none pointer">
                    Delete{" "}
                </div>
                <div className="cancel button bg-surface border-none pointer">
                    Cancel{" "}
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}