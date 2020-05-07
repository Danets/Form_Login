(() => {
  const application = Stimulus.Application.start();

  application.register(
    "form",
    class extends Stimulus.Controller {
      static targets = [
        "name",
        "email",
        "pass",
        "submit",
        "iconLeft",
        "iconRight",
        "iconCheck",
      ];

      invalidBtn;
      validBtn;
      showIconLeftPass;
      showIconRightPass;
      hideIconLeftPass;
      hideIconRightPass;

      initialize() {
        this.invalidBtn = this.data.get("invalid-btn");
        this.validBtn = this.data.get("valid-btn");
        this.showIconLeftPass = this.data.get("left-icon");
        this.showIconRightPass = this.data.get("right-icon");
        this.hideIconLeftPass = this.iconLeftTarget.className;
        this.hideIconRightPass = this.iconRightTarget.className;
      }

      login(event) {
        event.preventDefault();
        const email = this.emailTarget.value;
        const pass = this.passTarget.value;
        const emailStorage = localStorage.getItem(email);
        if (emailStorage === null) {
          this.validateEmail();
          return;
        } else if (emailStorage !== pass) {
          this.validatePassword();
          return;
        } else {
          this.loggedIn();
        }
      }

      validateEmail() {
        this.nameTarget.textContent = "Oops No user!";
        this.emailTarget.setCustomValidity("No user");
        this.passTarget.value = "";
        this.invalidButton();
      }

      validatePassword() {
        this.nameTarget.textContent = "Wrong password";
        this.passTarget.value = "";
        this.passTarget.setCustomValidity("Wrong password");
        this.invalidButton();
      }

      invalidButton() {
        this.submitTarget.value = "Retry";
        this.submitTarget.classList.add(this.invalidBtn);
      }

      loggedIn() {
        this.nameTarget.textContent = "Welcome";
        this.emailTarget.value = "";
        this.passTarget.value = "";
        this.submitTarget.value = "Log in";
        this.submitTarget.classList.remove(this.invalidBtn);
      }

      showPass() {
        this.passTarget.type = "text";
        this.iconLeftTarget.className = this.showIconLeftPass;
        this.iconRightTarget.className = this.showIconRightPass;
      }

      hidePass() {
        this.passTarget.type = "password";
        this.iconLeftTarget.className = this.hideIconLeftPass;
        this.iconRightTarget.className = this.hideIconRightPass;
      }

      customValidity() {
        this.emailTarget.setCustomValidity("");
        this.passTarget.setCustomValidity("");
      }
    }
  );
  application.register(
    "signup",
    class extends Stimulus.Controller {
      static targets = ["name", "email", "pass", "submit"];

      signup(e) {
        e.preventDefault();
        const email = this.emailTarget.value;
        const pass = this.passTarget.value;
        const emailStorage = localStorage.getItem(email);
        if (!emailStorage) {
          this.saveUser(email, pass);
        } else {
          this.userExist();
        }
      }

      saveUser(email, pass) {
        this.nameTarget.textContent = "User saved";
        localStorage.setItem(email, pass);
        this.emailTarget.value = "";
        this.passTarget.value = "";
      }

      userExist() {
        this.nameTarget.textContent = "User exist";
        this.emailTarget.setCustomValidity("User exist");
      }
    }
  );
})();
