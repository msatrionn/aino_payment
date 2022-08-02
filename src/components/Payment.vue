<template>
  <div class="container wrapp">
    <div class="data">
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-md-6">
          <p class="method-text">Choose Method Payment</p>
          <div class="accordion card shadow bordershadow" id="accordionExample">
            <div class="accordion-item" id="accordionpayment">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button bg-primary button-accord"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  QRIS
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="payment">
                    <div class=""><span class="text-payment">Ovo</span></div>
                    <div class="">
                      <img
                        :src="require('@/assets/ovo.png')"
                        class="img-payment"
                        alt=""
                      />
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="fontawesome-size"
                        >
                          <path
                            class="fonts-colors"
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <hr />
                  <div class="payment">
                    <div class="">
                      <span class="text-payment">Link Aja</span>
                    </div>
                    <div class="">
                      <img
                        :src="require('@/assets/linkaja.png')"
                        class="img-payment"
                        alt=""
                      />
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="fontawesome-size"
                        >
                          <path
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div
            class="accordion card shadow bordershadow"
            id="accordionExample2"
          >
            <div class="accordion-item" id="accordionpayment">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button bg-primary button-accord"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Virtual Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div class="accordion-body">
                  <div class="payment">
                    <div class=""><span class="text-payment">Ovo</span></div>
                    <div class="">
                      <img
                        :src="require('@/assets/ovo.png')"
                        class="img-payment"
                        alt=""
                      />
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="fontawesome-size"
                        >
                          <path
                            class="fonts-colors"
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <hr />
                  <div class="payment">
                    <div class="">
                      <span class="text-payment">Link Aja</span>
                    </div>
                    <div class="">
                      <img
                        :src="require('@/assets/linkaja.png')"
                        class="img-payment"
                        alt=""
                      />
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="fontawesome-size"
                        >
                          <path
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div
            class="accordion card shadow bordershadow"
            id="accordionExample3"
          >
            <div class="accordion-item" id="accordionpayment">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button bg-primary button-accord"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Debit
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample3"
              >
                <div class="accordion-body">
                  <div class="payment">
                    <div class="">
                      <span class="text-payment">Credit Card</span>
                    </div>
                    <div class="">
                      <img
                        :src="require('@/assets/ovo.png')"
                        class="img-payment"
                        alt=""
                      />
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="fontawesome-size"
                        >
                          <path
                            class="fonts-colors"
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <hr />
                  <div class="payment">
                    <div class="">
                      <span class="text-payment">Debit Card</span>
                    </div>
                    <div class="">
                      <img
                        :src="require('@/assets/linkaja.png')"
                        class="img-payment"
                        alt=""
                      />
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          class="fontawesome-size"
                        >
                          <path
                            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 pt-4 my-3">
          <div class="card shadow bordershadow p-3 mt-4">
            <span class="method-text">Order Summary</span>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-4">Visit Date</div>
                <div class="col-md-4 text-center"></div>
                <div class="col-md-4 text-amount text-end">02-08-2022</div>
              </div>
              <div class="row card-summary">
                <div class="col-md-4">Booking Number</div>
                <div class="col-md-4 text-center"></div>
                <div class="col-md-4 text-amount text-end">QXy201X0</div>
              </div>
            </div>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-4">Tiket perorangan TMII</div>
                <div class="col-md-4 text-center">5x</div>
                <div class="col-md-4 text-amount text-end">Rp 250.000</div>
              </div>
              <div class="row card-summary">
                <div class="col-md-4">Tiket Mobil</div>
                <div class="col-md-4 text-center">1x</div>
                <div class="col-md-4 text-amount text-end">Rp 40.000</div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-4">Total</div>
                <div class="col-md-4 text-center">1x</div>
                <div class="col-md-4 text-amount text-end">Rp 40.000</div>
              </div>
              <div class="row card-summary">
                <div class="col-md-6">
                  Voucher <span class="disc">(Disc 10%)</span>
                </div>
                <div class="col-md-6 text-amount text-end">
                  <span class="disc">- Rp 30.000</span>
                </div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-4">
                  <span class="text-amount">Total Payment</span>
                </div>
                <div class="col-md-4 text-center"></div>
                <div class="col-md-4 text-amount text-end">
                  <span class="text-payment2">- Rp 240.000</span>
                </div>
              </div>
            </div>
            <div class="policy">
              <input
                type="checkbox"
                name=""
                class="form-check-input check"
                id=""
              />
              <span class="policy-text"
                >I have read and agree to the
                <span class="policy-text-2">Terms and Conditions</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bordershadow {
  border: none !important;
}
.wrapp {
  padding-top: 50px;
  background: #f0f2f3;
}
.payment {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.method-text {
  color: #0b5d6f;
  font-size: 32px;
}
.button-accord {
  color: #f0f2f3 !important;
  font-weight: 500;
}
#accordionpayment .accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}
.fontawesome-size {
  width: 9px;
  color: red !important;
}
.img-payment {
  height: 20px;
  padding-right: 15px;
}
.text-payment {
  font-size: 20px;
  color: #757575;
}
.text-payment2 {
  font-size: 24px;
  color: #0b5d6f;
}
.img-payment svg {
  color: white;
}
.accordion {
  margin-bottom: 30px;
}
#card-summary-wrap {
  margin: 10px 0;
  background: #f9fafa;
  border: #e6e6e6 1px solid;
  color: #757575;
}
.card-summary {
  margin: 5px 0;
}
.text-amount {
  font-weight: 600;
  color: #0b5d6f;
}
.disc {
  color: #00b9bc;
  font-weight: 600;
}
.check {
  padding: 10px;
}
.policy {
  display: flex;
  align-content: center;
  align-items: center;
  color: #757575;
}
.policy-text {
  margin-left: 10px;
}
.policy-text-2 {
  color: #0b5d6f;
  font-weight: 700;
}
</style>
<script>
export default {
  name: "PaymentPage",
  props: {
    msg: String,
  },
};
</script>
