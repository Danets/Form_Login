(() => {
    const application = Stimulus.Application.start()

    application.register("form", class extends Stimulus.Controller {
        static targets = [ "name", "email", "pass", "submit", "iconLeft", "iconRight" ];
        
        invalidButton;
        showIconLeftPass;
        showIconRightPass;
        hideIconLeftPass;
        hideIconRightPass;

        initialize() {
            this.invalidButton = this.data.get("invalid-btn");
            this.showIconLeftPass = this.data.get("left-icon");
            this.showIconRightPass = this.data.get("right-icon");
            this.hideIconLeftPass = this.iconLeftTarget.className;
            this.hideIconRightPass = this.iconRightTarget.className;
        }

        login(event) {
            event.preventDefault();
            const email = this.emailTarget.value;
            const pass = this.passTarget.value;
            this.invalidButton();
        }

           
        invalidButton() {
            this.submitTarget.value = 'Retry';
            this.submitTarget.classList.add(this.invalidButton);
        }

        showPass() {
            this.passTarget.type = 'text';
            this.iconLeftTarget.className = this.showIconLeftPass;
            this.iconRightTarget.className = this.showIconRightPass;
        }
        
        hidePass() {
            this.passTarget.type = 'password';
            this.iconLeftTarget.className = this.hideIconLeftPass;
            this.iconRightTarget.className = this.hideIconRightPass;
        }

        customValidity() {
            this.emailTarget.setCustomValidity('');
            this.passTarget.setCustomValidity('');
        }
    })
  })()