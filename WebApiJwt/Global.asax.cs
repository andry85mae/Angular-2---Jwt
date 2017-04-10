using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using WebApiJwt.App_Start;

namespace WebApiJwt
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //add filteer for denied auth
            GlobalConfiguration.Configure(FilterConfig.Configure);
        }
    }
}
