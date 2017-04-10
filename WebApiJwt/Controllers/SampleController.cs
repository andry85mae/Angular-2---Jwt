using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Net;
namespace WebApiJwt.Controllers
{
    
    public class SampleController : ApiController
    {
        /// <summary>
        /// Get Sample Value
        /// </summary>
        /// <remarks>
        /// Get a int value for testing the web api 
        /// </remarks>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        public async Task<HttpResponseMessage> GetValue()
        {
            
            return Request.CreateResponse(HttpStatusCode.OK, 1);

        }
    }
}