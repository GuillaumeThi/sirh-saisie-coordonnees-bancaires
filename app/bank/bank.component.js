import template from './bank.component.html'

class controller {

    constructor(BankService, $location) {
        this.BankService = BankService
        this.$location = $location
    }

    $onInit () {

        this.BankService.getDepartements()
            .then(departements => this.departements = departements)

        this.BankService.getCollaborateurs()
            .then(collaborateurs => this.collaborateurs = collaborateurs)
    }

}

export let BankComponent = {
    controller,
    template,
    bindings: {
        departements: '<',
        collaborateurs: '<'
    }
}