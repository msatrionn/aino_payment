<template>
  <div class="container wrapp">
    <div class="data">
      <div class="row">
        <div class="col-md-6 pt-4 my-3">
          <div class="card shadow bordershadow p-3 mt-4">
            <span class="method-text">Virtual Account</span>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-6">Tiket perorangan TMII</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="col-md-6 text-amount">Mandiri</div>
                <div class="col-md-6 text-amount text-end">
                  <img
                    :src="require('@/assets/mandiri.svg')"
                    class="img-payment"
                    alt=""
                  />
                </div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-6">Virtual Account Number</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="col-md-6 text-amount">
                  1200 - 0012 - 0000 - 0010
                </div>
                <div class="col-md-6 text-amount text-end">
                  <img
                    :src="require('@/assets/copy.png')"
                    class="img-payment"
                    alt=""
                  />
                </div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-6">Payment Before</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="col-md-6 text-amount">01-08-2022 23:40:00</div>
              </div>
            </div>
            <p class="method-text">Payment Instructions</p>
            <div class="accordion bordershadow" id="accordionExample">
              <div class="accordion-item" id="title-accordion">
                <h2 class="accordion-header-status" id="headingOne">
                  <button
                    id="accordion-title"
                    class="accordion-button instructions button-accord-status"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ATM Transfer
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <span class="text-status">
                      1. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam quam id aliquet amet sed cras massa laoreet
                      nisl. Ut adipiscing tempor, urna in leo quis mauris ut.
                      Sed dolor egestas iaculis tincidunt. Sed mattis
                      suspendisse nam lacus tristique facilisis neque, porttitor
                      id.
                    </span>
                    <br />
                    <span class="text-status">
                      2. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam quam id aliquet amet sed cras massa laoreet
                      nisl. Ut adipiscing tempor, urna in leo quis mauris ut.
                      Sed dolor egestas iaculis tincidunt. Sed mattis
                      suspendisse nam lacus tristique facilisis neque, porttitor
                      id.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion bordershadow" id="accordionExample2">
              <div class="accordion-item" id="title-accordion">
                <h2 class="accordion-header-status" id="headingOne">
                  <button
                    id="accordion-title"
                    class="accordion-button instructions button-accord-status"
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
                    <span class="text-status">
                      1. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam quam id aliquet amet sed cras massa laoreet
                      nisl. Ut adipiscing tempor, urna in leo quis mauris ut.
                      Sed dolor egestas iaculis tincidunt. Sed mattis
                      suspendisse nam lacus tristique facilisis neque, porttitor
                      id.
                    </span>
                    <br />
                    <span class="text-status">
                      2. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam quam id aliquet amet sed cras massa laoreet
                      nisl. Ut adipiscing tempor, urna in leo quis mauris ut.
                      Sed dolor egestas iaculis tincidunt. Sed mattis
                      suspendisse nam lacus tristique facilisis neque, porttitor
                      id.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion bordershadow" id="accordionExample3">
              <div class="accordion-item" id="title-accordion">
                <h2 class="accordion-header-status" id="headingOne">
                  <button
                    id="accordion-title"
                    class="accordion-button instructions button-accord-status"
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
                    <span class="text-status">
                      1. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam quam id aliquet amet sed cras massa laoreet
                      nisl. Ut adipiscing tempor, urna in leo quis mauris ut.
                      Sed dolor egestas iaculis tincidunt. Sed mattis
                      suspendisse nam lacus tristique facilisis neque, porttitor
                      id.
                    </span>
                    <br />
                    <span class="text-status">
                      2. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam quam id aliquet amet sed cras massa laoreet
                      nisl. Ut adipiscing tempor, urna in leo quis mauris ut.
                      Sed dolor egestas iaculis tincidunt. Sed mattis
                      suspendisse nam lacus tristique facilisis neque, porttitor
                      id.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 pt-4 my-3">
          <div class="card shadow bordershadow p-3 mt-4">
            <span class="method-text">Payment Status</span>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-6"><div class="status">Pending</div></div>
                <div class="col-md-6 text-amount text-end">
                  <button class="btn cek-status">Cek status</button>
                </div>
              </div>
              <div class="row card-summary">
                <div class="col-md-6">Merchant Name</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="text-amount">Taman Wisata Candi</div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-6">Booking Number</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="text-amount">OtQFxNj76E</div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-6">Payment Number</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="text-amount">01-08-2022 23:40:00</div>
              </div>
            </div>
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
            <button class="btn btn-primary button-back">
              Back to Aplication
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
#title-accordion .button-accord-status {
  background: none !important;
  color: #0b5d6f !important;
  font-weight: 500;
  padding-left: 0;
  padding-right: 0;
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
.accordion-header-status {
  margin-bottom: 0;
  margin-left: 20px;
  margin-right: 20px;
}
.text-status {
  color: #757575;
}
#accordionExample .accordion-button:after,
#accordionExample2 .accordion-button:after,
#accordionExample3 .accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23757575'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}
.status {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  background: #ffb200;
  color: #ffff;
  border-radius: 30px;
}
.bordershadow .button-back {
  border-radius: 30px;
  font-weight: bold;
}
.btn.cek-status {
  border: 1px solid #e6e6e6e8;
  border-radius: 30px;
  color: #0b5d6f;
}
</style>
<script>
export default {
  name: "PaymentStatus",
  props: {
    msg: String,
  },
};
</script>
