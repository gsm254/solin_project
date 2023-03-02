class TicketDetailView{
    get ticketInfoHeader(){
        return $('//span[@class="dvHeaderText"]')
    }
    async getTicketInfoHeader(){
        return await(await this.ticketInfoHeader).getText()
    }
}
export default new TicketDetailView()