<template>
  <section class="ba-section">
    <div class="row column">
      <h2 class="ba-section__title">{{section.title}}</h2>
    </div>
    <div class="row" v-if="posts.length > 0">
      <div class="column small-12 medium-6 large-6" v-for="(post, i) in posts" :key="i">
        <article class="ba-post">
          <a :href="post.link">
            <img
              v-if="post._embedded['wp:featuredmedia']"
              class="ba-post__img-link"
              :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['post-thumbnail'].source_url"
              :alt="post.title.rendered"
            />
            <img v-else src="/img/home-page/intro.jpg" alt />
          </a>
          <div class="ba-post__body">
            <h3 class="ba-post__title">
              <a :href="post.link" target="_blank">{{post.title.rendered}}</a>
            </h3>
            <div class="ba-post__excerpt" v-html="post.excerpt.rendered"></div>
            <div class="ba-post__footer">
              <a href="#" class="ba-button ba-button--on-dark">Читати все</a>
              <div class="ba-post__meta">
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6132 2C7.18781 2 2.79443 6.48 2.79443 12C2.79443 17.52 7.18781 22 12.6132 22C18.0484 22 22.4516 17.52 22.4516 12C22.4516 6.48 18.0484 2 12.6132 2ZM12.623 20C8.27878 20 4.76015 16.42 4.76015 12C4.76015 7.58 8.27878 4 12.623 4C16.9672 4 20.4859 7.58 20.4859 12C20.4859 16.42 16.9672 20 12.623 20Z"
                      fill="#D7D7D7"
                    />
                    <path
                      d="M13.1144 7H11.6401V13L16.8001 16.15L17.5373 14.92L13.1144 12.25V7Z"
                      fill="#D7D7D7"
                    />
                  </svg>
                  <time>{{post.date}}</time>
                </span>
                <span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.62311 8C10.7952 8 12.5545 6.21 12.5545 4C12.5545 1.79 10.7952 0 8.62311 0C6.451 0 4.69168 1.79 4.69168 4C4.69168 6.21 6.451 8 8.62311 8ZM8.62311 10C5.99888 10 0.760254 11.34 0.760254 14V16H16.486V14C16.486 11.34 11.2473 10 8.62311 10Z"
                      fill="#D7D7D7"
                    />
                  </svg>
                  {{post._embedded.author[0].name}}
                </span>
              </div>
              <!-- /.ba-post__meta -->
            </div>

            <!-- /.ba-post__footer -->
          </div>
          <!-- /.ba-post__body -->
        </article>
        <!-- /.ba-post -->
      </div>
    </div>
    <!-- /.row -->
    <div class="text-center ba-load-more-wrap">
      <button v-if="page < 10" class="ba-button ba-button--fill" @click="loadMore">Показати більше</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
  data() {
    return {
      posts: [],
      page: 1,
      perPage: 4
    };
  },
  methods: {
    getPosts() {
      const postsUrl = `https://www.zavtra.in.ua/wp-json/wp/v2/posts?filter[cat]=you-camp&_embed&per_page=${this.perPage}&page=${this.page}`;
      fetch(postsUrl)
        .then(result => result.json())
        .then(data => {
          console.log(data);
          this.posts.push(...data);
        });
    },
    loadMore() {
      this.page++;
      this.getPosts();
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style lang="scss">
.ba-post {
  margin-bottom: 30px;

  &__img-link {
    display: block;
    overflow: hidden;
    width: 100%;

    img {
      display: block;
      width: 100%;
      transition: transform 0.3s;
    }

    &:hover {
      img {
        transform: scale(1.1) rotate(2deg);
      }
    }
  }

  &__body {
    background: $black;
    color: #d7d7d7;
    // padding: 30px 20px;

    @include breakpoint(large) {
      padding: 30px 20px;
    }
  }

  &__title {
    color: #fff;

    a {
      color: inherit;

      img {
        width: 100%;
      }
      &:hover,
      &:focus {
        color: $primary-color;
      }
    }
  }

  &__excerpt {
    margin-bottom: 15px;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint(large) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__meta {
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include breakpoint(medium) {
      flex-direction: column;
      padding: 0 0 0 20px;

      & > span + span {
        margin-top: 10px;
      }
    }

    & > span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
}
</style>