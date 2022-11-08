import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
 <!-- Begin SpeakPipe code -->
<script type="text/javascript">
(function(d){
var app = d.createElement('script'); app.type = 'text/javascript'; app.async = true;
app.src = 'https://www.speakpipe.com/loader/yl3qxqnpoatffff2lmcvz91oitpl0b4d.js';
var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(app, s);
})(document);
</script>
<!-- End SpeakPipe code -->
        </p>
      </main>

      <Footer />
    </div>
  )
}
