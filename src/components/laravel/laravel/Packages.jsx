import { CodeCommand } from "../../path";
import images from "../imagesLaravel";

export default function Packages(props){
   return(
   <>
      <h1 className="heading-style heading-style-python-color"> Laravel Packages </h1>
      <article className="mt-5">
            <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
            <h1 className="mt-5"> Packages </h1>
            <h2 id="Authentication_UI">1 - Authentication UI </h2>
            <a href='https://techvblogs.com/blog/laravel-9-authentication-tutorial' target='_blanck'>
               Authentication UI Tutorial Easy
            </a>

            <h2 id="Authentication_Breeze">2 - Authentication Breeze </h2>
            <a href='https://www.itsolutionstuff.com/post/laravel-9-authentication-using-breeze-tutorialexample.html' target='_blanck'>
               Authentication Breeze Tutorial More Than Easy (You can use this just in first of project or you will lost your web.php file)
            </a>

            <h2 id="Paypal_Payment">3 - Paypal Payment </h2>

            <a className='d-block' href='https://www.laravelia.com/post/laravel-10-paypal-payment-and-dive-into-details#google_vignette' target='_blanck'> Tutorial all file for using paypal to pay with card or with paypal</a>

            <div className='alert bg-success'>
               <h2> About PayPal Developer Dashboard </h2>
               <div className="alert alert-secondary"> 
                  In this exemple we use the default app in <kbd>Apps & Credentials</kbd> :
                  <ul>
                     <li>By default paypal give you <span className='fs-5 text-success'>API Credentials</span> to test and you can create another one if you want .</li>
                  </ul>
               </div>
               <img src={images.laravel64} className="w-100 border mb-2" alt="ControllerPost"/>
               <ul  className="alert alert-secondary">
                  <li>in <span className='fs-5 text-success'>Testing Tools</span> you will find the app in to can test <span className='fs-5 text-success'>API Credentials</span>  </li>
                  <li>the <span className='fs-5 text-success'>API Credentials</span> in <span className='fs-5 text-success'>Testing Tools</span> is always business account </li>
               </ul>
               <img src={images.laravel65} className="w-100 border mb-2" alt="ControllerPost"/>
               <ul  className="alert alert-secondary">
                  <li>this is the default <span className='fs-5 text-success'>API Credentials</span> in <span className='fs-5 text-success'>Testing Tools</span> you can know that by Client ID</li>
               </ul>
               <img src={images.laravel65} className="w-100 border mb-2" alt="ControllerPost"/>
            </div>
            <h3>1 - intall package </h3>
            <div className='alert bg-dark text-light pb-0'><pre>composer require srmklive/PayPal</pre></div>
            <h3>2 - config/app.php </h3>
            <div className='alert alert-warning'>
         {/* <pre>'providers' => ServiceProvider::defaultProviders(){"->"}merge([
               ....
               srmklive\PayPal\Providers\PayPalServiceProvider::class,
           ])</pre> */}
            </div>
            <h3>3 -  To publish the configuration files for the PayPal package . </h3>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan vendor:publish --provider="Srmklive\PayPal\Providers\PayPalServiceProvider::class"</pre></div>
            <p>
                Make sure that the PayPal service provider class file exists and is not corrupted. You can check this by opening the 
               "vendor/rmklive/paypal/src/Providers/PayPalServiceProvider.php" check if the class if exist 
            </p>
            <div className='alert alert-danger'>
               <b>If you got some error when try to publish vendor use like this : </b>
               <img src={images.laravel61} className="w-100 border mb-2" alt="ControllerPost"/>
               <b>Use this command so salve error </b>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan config:cache</pre></div>
               <b>and Then :</b>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan vendor:publish</pre></div>
               <b> Chose the number for the provider and you are done. (in my case i use <span className='text-success'>11</span>)</b>
               <img src={images.laravel62} className="w-100 border mb-2" alt="ControllerPost"/>
               <p>this will create file paypal.php inside folder config/  <kbd>config/paypal.php</kbd> </p>
            </div>
            <h3>4 - .env </h3>
            <p> add this to .env </p>
            <h4>The first method </h4>
            <div className='alert alert-warning pb-0'><pre>PAYPAL_MODE=sandbox
         PAYPAL_SANDBOX_API_USERNAME=..
         PAYPAL_SANDBOX_API_PASSWORD=..
         PAYPAL_SANDBOX_API_SECRET=..
         PAYPAL_CURRENCY=USD
         PAYPAL_SANDBOX_API_CERTIFICATE=</pre>
         </div>
         <h4>The second method </h4>
         <div className='alert alert-warning pb-0'><pre>PAYPAL_MODE=sandbox
         PAYPAL_SANDBOX_CLIENT_ID=
         PAYPAL_SANDBOX_CLIENT_SECRET=</pre>
         </div>
            <h4>Know we need to add info to .env to connect with paypal</h4>   
            <p className='alert alert-secondary'>
               <ul  className="alert alert-secondary">
                  <li>first you need to go to testing tools{">"}sandbox account and find the account business of you app created <kbd>Apps & Credentials</kbd> </li>
                  <li>is very important to choice <b>View/Edit account</b> </li>
               </ul>
            </p>
            <img src={images.laravel67} className="w-100 border mb-2" alt="ControllerPost"/>
            <img src={images.laravel68} className="w-100 border mb-2" alt="ControllerPost"/>
            <div className='alert alert-warning pb-0'><pre><span className='text-success'>//The first method</span>
         PAYPAL_MODE=sandbox
         PAYPAL_SANDBOX_API_USERNAME=<span className="text-danger fs-5">sb-enz1z26813155_api1.business.example.com</span>
         PAYPAL_SANDBOX_API_PASSWORD=<span className="text-danger fs-5">ABPFXEWWN2PK5RKZ</span>
         PAYPAL_SANDBOX_API_SECRET=<span className="text-danger fs-5">AMXv0WG6E0oyHPtur6YqWGuOvwuMAHF09Cm82S5lcy4IZswVrmaulq76</span>
         PAYPAL_CURRENCY=<span className="text-danger fs-5">USD</span>
         PAYPAL_SANDBOX_API_CERTIFICATE=
        
         <hr/>
        
         <span className='text-success'>//the second method</span>
         PAYPAL_SANDBOX_CLIENT_ID=<span className="text-success fs-5">AfILyKjspPjvt8p4rdHjB_PnX4IQcf_J4BLskhHZJF7ae8sxApDItgXzPqhBOUeYa1wYVQD5rHjjn7C9</span>
         PAYPAL_SANDBOX_CLIENT_SECRET=<span className="text-success fs-5">EMe7LGGXl1PUMYL7SUnlX8Mq4poVpaorCZX6ypxi9ZBEPp0bgF0m23Jox9iMcNvggjh4kXRQFG1A6327</span></pre>
            </div>
            <h3>5 - config/paypal.php </h3>
            <p> Handle paypal.php  code </p>
            <a href='https://stackoverflow.com/questions/64928459/i-tried-implementing-srmklive-paypal-1-0-into-my-laravel-project-locally' target="_blanck">Here</a>
            {/* <div className='alert alert-warning pb-0'><pre><span className='text-success'>//The first method compatible config</span>
         return [
         'mode'    => env('PAYPAL_MODE', 'sandbox'), // Can only be 'sandbox' Or 'live'. If empty or invalid, 'live' will be used.
         'sandbox' => [
             'username'    => env('PAYPAL_SANDBOX_API_USERNAME', ''),
             'password'    => env('PAYPAL_SANDBOX_API_PASSWORD', ''),
             'secret'      => env('PAYPAL_SANDBOX_API_SECRET', ''),
             'certificate' => env('PAYPAL_SANDBOX_API_CERTIFICATE', ''), 
             'app_id'      => 'APP-80W284485P519543T',
         ],

         'live' => [
              'username'    => env('PAYPAL_LIVE_API_USERNAME', ''),
              'password'    => env('PAYPAL_LIVE_API_PASSWORD', ''),
              'secret'      => env('PAYPAL_LIVE_API_SECRET', ''),
              'certificate' => env('PAYPAL_LIVE_API_CERTIFICATE', ''),
              'app_id'      => '',
         ],

         'payment_action' => env('PAYPAL_PAYMENT_ACTION', 'Sale'), // Can only be 'Sale', 'Authorization' or 'Order'
         'currency'       => env('PAYPAL_CURRENCY', 'USD'),
         'billing_type'   => 'MerchantInitiatedBilling',
         'notify_url'     => '', 
         'locale'         => '', 
         'validate_ssl'   => true, 
         ];   

         <hr/>
         <span className='text-success'>//the second method compatible config</span>
         return [
             'mode'    => env('PAYPAL_MODE', 'sandbox'), 
             'sandbox' => [
                 'client_id'         => env('PAYPAL_SANDBOX_CLIENT_ID', ''),
                 'client_secret'     => env('PAYPAL_SANDBOX_CLIENT_SECRET', ''),
                 'app_id'            => 'APP-80W284485P519543T',
             ],

             'live' => [
                 'client_id'         => env('PAYPAL_LIVE_CLIENT_ID', ''),
                 'client_secret'     => env('PAYPAL_LIVE_CLIENT_SECRET', ''),
                 'app_id'            => env('PAYPAL_LIVE_APP_ID', ''),
             ],
          
             'payment_action' => 'Sale', 
             'currency'       => env('PAYPAL_CURRENCY', 'USD'),
             'billing_type'   => 'MerchantInitiatedBilling',
             'notify_url'     => '', 
             'locale'         => '', 
             'validate_ssl'   => true,
         ];</pre>
                  </div> */}

               
            <br id="Stripe_Payment_Integration"/><br/>
            <h2>4 - Stripe Payment Integration</h2>
            <a href="https://www.itsolutionstuff.com/post/laravel-10-stripe-payment-gateway-integration-tutorialexample.html" target="_blanck"> Tutorial </a>
      </article>
   </>
   )
}