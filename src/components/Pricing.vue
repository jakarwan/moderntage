<template>
  <div id="Pricing" class="" ref="pricing">
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      class="scrollspy-example"
      tabindex="0"
    >
      <div class="blur">
        <div class="pricing-header">
          <h1><b>Pricing</b></h1>
        </div>
        <!-- <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card-pricing">
            <h2 class="pricing-title">Free</h2>
            <img src="../assets/img/1.jpg" class="card-img-top" alt="..." />
            <div>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                perspiciatis nisi possimus facere repellat aut tempora maiores
                fuga. Cum, autem. Soluta minus veniam labore quasi, ipsum beatae
                dolores ex cumque!
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card-pricing">
            <h2 class="pricing-title">Pro</h2>
            <div class="container">
              <img src="../assets/img/1.jpg" class="card-img-top" alt="..." />

              <div>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis perspiciatis nisi possimus facere repellat aut tempora
                  maiores fuga. Cum, autem. Soluta minus veniam labore quasi,
                  ipsum beatae dolores ex cumque!
                </span>
              </div>
              <div>
                <button class="btn-pricing">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="pricingTable">
                <div class="pricingTable-header">
                  <i class="fa fa-adjust"></i>
                  <div class="price-value">
                    $10.00
                    <!-- <span class="month">per month</span> -->
                  </div>
                </div>
                <h3 class="heading">Standard</h3>
                <div class="pricing-content">
                  <ul>
                    <li><b>50GB</b> Disk Space</li>
                    <li><b>50</b> Email Accounts</li>
                    <li><b>50GB</b> Monthly Bandwidth</li>
                    <li><b>10</b> subdomains</li>
                    <li><b>15</b> Domains</li>
                  </ul>
                </div>
                <div class="pricingTable-signup">
                  <a href="#">BUY NOW</a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="pricingTable green">
                <div class="pricingTable-header">
                  <i class="fa fa-briefcase"></i>
                  <div class="price-value">
                    $20.00
                    <!-- <span class="month">per month</span> -->
                  </div>
                </div>
                <h3 class="heading">Business</h3>
                <div class="pricing-content">
                  <ul>
                    <li><b>60GB</b> Disk Space</li>
                    <li><b>60</b> Email Accounts</li>
                    <li><b>60GB</b> Monthly Bandwidth</li>
                    <li><b>15</b> subdomains</li>
                    <li><b>20</b> Domains</li>
                  </ul>
                </div>
                <div class="pricingTable-signup">
                  <a href="#">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pricIng",
};
</script>
<style lang=""></style>
