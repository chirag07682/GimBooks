export const state = () => ({
  InvoiceNumber: null,
  InvoiceDate: null,
  InvoiceType: null,
  CustomerName: null,
  Amount: null,
  Action: null,
})

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },

  setInvoiceNumber(state, InvoiceNumber) {
    state.InvoiceNumber = InvoiceNumber
  },
  setInvoiceDate(state, InvoiceDate) {
    state.InvoiceDate = InvoiceDate
  },
  setInvoiceType(state, InvoiceType) {
    state.InvoiceType = InvoiceType
  },
  setCustomerName(state, CustomerName) {
    state.CustomerName = CustomerName
  },
  setAmount(state, Amount) {
    state.Amount = Amount
  },
  setAction(state, Action) {
    state.Action = Action
  },
}
