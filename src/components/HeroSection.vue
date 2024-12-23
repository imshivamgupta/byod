<template>
  <section class="hero">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Shivam Gupta" class="brand" />
    </div>
    <div class="content-view">
      <h1 class="">Develop with best one</h1>
      <h2>
        From wireframe to entire frontend, design, build, test and deploy your
        App.
      </h2>

      <form name="contact" class="contact-form" method="POST" data-netlify="true">
        <!-- <label for="email">Email</label> -->
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" class="submit-btn">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.hero {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 2px;
    border: 2px solid rgb(212 212 212/1);
    .brand {
      position: absolute;
      height: 60px;
      left: -32px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .content-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 4rem;
  }
  h1 {
    font-size: 128px;
    font-weight: 400;
    text-align: center;
    line-height: 1;
    color: transparent;
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.64) 0%,
      rgb(255, 255, 255) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    @media screen and (max-width: 748px) {
      font-size: 76px;
    }
  }
  h2 {
    margin-top: 1rem;
    width: 70%;
    font-weight: 400;
    text-align: center;
    color: rgb(212 212 212/1);
  }

  .contact-form {
    // background: linear-gradient(to bottom, rgba(6, 13, 29, 1), #080a13);
    backdrop-filter: blur(100px);
    margin-top: 4rem;
    padding: 2px;
    display: flex;
    position: relative;
    width: 50%;
    min-width: 350px;
    border-radius: 1rem;
    background: linear-gradient(
      160deg,
      rgba(89, 156, 240, 0.5),
      rgba(34, 104, 203, 0.3),
      rgba(48, 142, 233, 0.2),
      rgba(54, 54, 54, 0.2)
    );

    div {
      display: flex;
      width: 100%;
      position: relative;
      border-radius: 1rem;
      background: linear-gradient(to bottom, rgb(2 1 1), #0a0a0a);
      backdrop-filter: blur(100px);
      padding: 1rem;
    }
    input {
      padding: 1rem;
      border: none;
      width: 100%;
      height: 100%;
      background: transparent;
      color: rgb(212 212 212/1);
      font-size: 1.2rem;
      &::placeholder {
        color: rgb(212 212 212/1);
      }
      &:focus {
        outline: none;
      }

      //remove autofill background color
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px rgb(2 1 1) inset;
        -webkit-text-fill-color: rgb(212 212 212/1);
      }
    }

    .submit-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
    }
  }
}
</style>
