export  class ResourceURI {
    private static host = 'http://api.victorcalls.com';
    private static hostP = 'http://192.168.1.10:5000/api/victor/';


    public static pLogin = ResourceURI.host + '/token';  // for login post api

    //uploads leads file
    public static pUploadLeads = ResourceURI.host + '/api/Leads/ExcelUpload';
    // assignee list
   // public static gAssigneeList = ResourceURI.host + '/api/account/Users?userName=@userNameMobile' ;

    // count of different leads
    public static gLeadCount = ResourceURI.host + '/api/Leads/leadStatusCounts?username=';

    // get raw leads
    public static gRawLeads =ResourceURI.host + '/api/Leads/Company/RawLeads?userName=';

    //get leads by statusId
    //'/api/Leads/Company?username=vedagya19&statusid='
    public static gLeadsByStatusId =ResourceURI.host + '/api/Leads/Company?username=';

    // get raw leads 10 at a time with page number
    public static gTenRawLeadsPno =ResourceURI.host + 
                    '/api/leads/Company/RawLeadsWithPaging?userName=vedagya19&pagesize=10&pagenumber=';
    
    
    // post a project
    public static pProject = ResourceURI.host + '/api/Account/Project';

    // get all documents
    public static gAllDocuments = ResourceURI.host + '/api/Account/Projects?userName=vedagya19';

    // get documents of a project by projectId
    public static gDocumentByProjectID = ResourceURI.host + '/api/Account/Project/';

    // post document of a project
    //http://api.victorcalls.com/api/Account/Project/projectid/Document
    public static pDocumentOfProject = ResourceURI.host + '/api/Account/Project/projectid/Document';

    public static pAddUserP = ResourceURI.hostP+ 'addUser';
    //api/account/register:   http://api.victorcalls.com/api/account/register
    public static pAddUser = ResourceURI.host + '/api/account/register';
    //http://api.victorcalls.com/api/Account/Users?userName=vedagya19: get user
    //http://api.victorcalls.com/api/Account/Roles : get user role
    //
    public static gUserRole = ResourceURI.host + '/api/Account/Roles';
//http://api.victorcalls.com/api/Account/Projects?userName=vedagya19
    public static gUserProject = ResourceURI.host +'/api/Account/Projects?userName=';

    //update user
    public static uUser = ResourceURI.host +'/api/account/update';

    //delete user
    public static dUser = ResourceURI.host +'/api/account/delete';
    
    // get user
    public static gUser = ResourceURI.host + '/api/Account/Users?userName=';

    //get companies http://api.victorcalls.com/api/Account/Companies
    public static gCompanies = ResourceURI.host + '/api/Account/Companies';

    public static gCompany = ResourceURI.host + '/api/Account/Company';

    //http://api.victorcalls.com/api/Account/Company
    public static pCompany = ResourceURI.host + '/api/Account/Company';
    //http://192.168.1.10:5000/api/victor/addCompany

    public static dCompany = ResourceURI.host + '/api/Account/Company/delete';

    //  getting integrations of a company - 
    //http://api.victorcalls.com/api/Account/Company/1/Integrations
    public static gIntegrataions = ResourceURI.host + '/api/Account/Company/';

    //getting particular integration 
    //http://api.victorcalls.com/api/Account/Company/1/Integrations/1
    public static gIntegration = ResourceURI.host + '/api/Account/Company/1/Integrations/1';

   //http://api.victorcalls.com/api/Account/Company/1/Integrations
   public static pIntegration = ResourceURI.host + '/api/Account/Company/';

   //http://api.victorcalls.com/api/account/projects?userName=vedagya19  get projects
   

   // get projects list
   public static gAllProjects = ResourceURI.host +'/api/account/projects?userName=';

   //post seleted leads
   public static pLeads = ResourceURI.host +'/api/Leads/';

   //http://api.victorcalls.com/api/account/Project/1/Users  get users
   public static gUsers = ResourceURI.host +'/api/account/Project/';

   //get locations
  // public static gLocations = ResourceURI.host + 'api/leads/locations?userName=';

  //50.62.160.53/ph12513175871/Modinagar@7/21
  public static gLocations = ResourceURI.host + '/api/leads/locations?userName=';
}