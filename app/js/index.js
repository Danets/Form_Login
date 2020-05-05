(() => {
    const application = Stimulus.Application.start()

    application.register("form", class extends Stimulus.Controller {
        static targets = [ "name", "email", "pass", "submit" ];
        initialize() {
            console.log("Form Start!")
        }
        login() {
            this.nameTarget.textContent = 'Holla'; 
        }
    })
  })()