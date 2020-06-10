import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import dashboard from '../../assets/css/dashboard.css';
import logo from '../../assets/image/logo.png';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Chartdiv from '../components/charts';
import img1 from '../../../src/assets/image/Capture1.PNG';
import Monthlystats from '../components/Monthystats-graph';
class dashBoard extends Component
{
    render(){  
        const data = [
            {
              name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
              name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
              name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
              name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
              name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
              name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
              name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
            },
          ];  
        const data1 = [
            {
              name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
              name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
              name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
              name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
              name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
              name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
              name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
            },
          ];         
        return(
            <div className="body-container col-md-12 col-12">
                <div className="sidebar-container col-md-3 ">
                    <div className="sidebar-logo">
                        <a className="logo" href="#"><img src={logo} />
                            Adminator
                        </a>
                    </div>
                    <div className="sidebar-menu">
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-home"></i> Dashboard</a>
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-at"></i>Email </a>
                        <a className="sidebar-menu-items" href="#"><i class="far fa-envelope"></i>Compose</a>
                        <a className="sidebar-menu-items" href="#"><i class="far fa-calendar-alt"></i>Calender</a>
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-columns"></i> Chart</a>
                        <a className="sidebar-menu-items" href="#"><i class="far fa-file"></i>Chat</a>
                        <a className="sidebar-menu-items" href="#"><i class="fab fa-wpforms"></i>Form</a>
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-icons"></i>UI Element</a>
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-border-all"></i>Table</a>
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-chart-line"></i>Map</a>
                        <a className="sidebar-menu-items" href="#"><i class="far fa-file"></i>Pages</a>
                        <a className="sidebar-menu-items" href="#"><i class="fas fa-chart-pie"></i>Multiple levels</a>  
                    </div> 
                </div>
                <div className="main-container col-9">
                    <div className="header navbar  col-md-12 col-12">
                        <div className="navbar-content">
                            <a className="navbar-items" href="#"> <i class="far fa-bell"> </i> </a>
                            <a className="navbar-items" href="#"> <i class="far fa-envelope"> </i> </a>
                            <a className="navbar-items" href="#"> <i class="fas fa-user-circle"> </i> </a>
                        </div>
                    </div> 
                    <div className="main-body-container ">
                        <div className="main-menu-container-1 row">
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title">Total visits</p>
                                        <div className=" card-main w-100">
                                            <i class="fas fa-signal text-warning"></i>
                                            <span classNam="card-span3">+ 10%</span>
                                        </div>                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title">Total page views</p>
                                        <div className=" card-main w-100">
                                            <i class="fas fa-signal text-success"></i>
                                            <span classNam="card-span2">- 7%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title">Unique Visitor</p>
                                        <div className=" card-main w-100">
                                            <i class="fas fa-signal text-primary"></i>
                                            <span classNam="card-style">+ 12%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title">Bounce Rate</p>
                                        <div className=" card-main w-100">
                                            <i class="fas fa-signal text-danger"></i>
                                            <span className="card-span" >+ 33%</span>
                                        </div>                                      
                                    </div>
                                </div>
                            </div>                
                        </div>
                        <div className="main-menu-container-2 col-md-12 row">
                            <div className="main-graphs col-md-8 col-sm-6">
                                <Chartdiv datavalue={data} />
                            </div>
                        <div className="progressbar-content col-md-4">
                            <div className="progress-bar-sec-1">
                                <div className="progressbar">
                                    <div className="progressbar-body">
                                        <h4 className="progressbar-title">100K</h4>
                                        <p>Visitors From USA</p>
                                        <ProgressBar now={50} />
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="progressbar-body">
                                        <h4 className="progressbar-title">40K</h4>
                                        <p>Visitors From Eu</p>
                                        <ProgressBar now={80} />
                                    </div>
                                </div>                     
                                <div className="progressbar">
                                    <div className="progressbar-body">
                                        <h4 className="progressbar-title">50K</h4>
                                        <p>Visitors From USA</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="progressbar-body">
                                        <h4 className="progressbar-title">1M</h4>
                                        <p>Visitors From USA</p>
                                        <ProgressBar now={90} />
                                    </div>
                                </div> 
                            </div>
                            <hr />
                            <div className="progress-bar-sec-2">
                                <div className="sec-1">
                                    <img src={img1}/>
                                    <p>New user</p>
                                </div>
                                <div className="sec-2">
                                    <img src={img1}/>
                                    <p>New new purchase</p>
                                </div>
                                <div className="sec-3">
                                    <img src={img1}/>
                                    <p>Bounce rate</p>
                                </div>                                    
                            </div>                                 
                        </div>                        
                        </div>
                        <div className="main-container-section-3 col-md-12 ">
                            <div className="graph-body col-md-6 col-6">
                                <div className="Monthly-Stats-graph">
                                    <Monthlystats linegraph={data1} />
                                </div>
                                <div className="Monthly-Stats-graph-details col-md-6 col-6">
                                    <div className="graph-1-body">
                                        <span>10%  APPL</span>
                                        <span>2%  Average</span>
                                        <span>15%  Sales</span>
                                        <span>8%  Profit</span>
                                    </div>                                    
                                </div>
                            </div> 
                            <div className="Todo-List col-md-6 ">
                                <h4>Todo List</h4>                                    
                                <label className="list-name"><input type="checkbox" /> <span className="checkmark"> Call John for Dinner </span> </label>
                                <label className="list-name"><input type="checkbox" /><span className="checkmark">Book Boss Flight  </span> </label>                    
                                <label className="list-name"><input type="checkbox" /><span className="checkmark">Give Purchase Report</span><span> 3 minutes</span></label>
                                <label className="list-name"><span className="checkmark"> <input type="checkbox" />Watch Game of Thrones Episode</span> <span>3 minutes</span></label>
                                <label className="list-name"><span className="checkmark"><input type="checkbox" />Give Purchase report</span><span>3 minutes</span> </label>
                            </div>
                        </div> 
                        <div className="main-container-section-4 col-md-12 ">
                            <div className="sales-reports col-md-6">
                                <h5>sales reports</h5>
                                <header>
                                <h2>Novermer 2020</h2>
                                <h1>$6,000</h1>
                                <p>Sales Reports</p>
                                
                                </header>
                                {/* <main>
                                <table>
                                    <thead>
                                        <th>
                                            <tr>
                                                <td> Name </td>
                                                <td> Status</td>
                                                <td> Date</td>
                                                <td> Price</td>
                                            </tr>
                                            
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Item #1 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>$12</td>
                                            <hr />
                                            <td>Item #2 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>$12</td>
                                            <hr/>
                                            <td>Item #3 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>$12</td>
                                            <hr/>
                                            <td>Item #4 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>18$</td>
                                            <hr/>
                                            <td>Item #5 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>$12</td>                                    
                                            <hr/>
                                            <td>Item #6 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>$12</td>
                                            <hr/>
                                            <td>Item #7 Name</td>
                                            <td><label>Unavailable</label></td>
                                            <td>Nov 18</td>
                                            <td>$12</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </main> */}
                                <footer>
                                    <div className="btn-group-toggle" >Check all the sales</div >
                                </footer>
                            </div>
                            <div className="weather-reports col-md-6">
                                <h4>Weather</h4>
                                <section className="weather-reports-section-1">
                                    <span><h3>32°F</h3>
                                        <p>Monday</p>
                                    </span>
                                    <span><h3>Party Clouds</h3>
                                        <p>08 June ,2020</p>
                                    </span>
                                </section>
                                <span>Partly Clouds <p>June ,06 2020</p></span>
                                <section className="weather-reports-section-2">
                                    <span><p>Wind</p></span>
                                    <span ><p> Sunrise </p> </span>
                                    <span ><p>pressure </p></span>
                                </section>
                                <section className="weather-reports-section-3">
                                    <div className="weekDays">
                                        <span>Monday <p></p></span>
                                        <span>Tuesday <p></p></span>
                                        <span>Wednesday <p></p></span>
                                        <span> Thusday<p></p></span>
                                        <span>Friday <p></p></span>
                                        <span>Saturday <p></p></span>
                                        <span>Sunday <p></p></span>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="dummy-chat-box-footer">
                            <div className="dummy-chat-box">
                            <h5>Quick Chat</h5> 
                            <main className="jumbotron chat">
                                    <img></img>
                                     <p></p>
                                     <p></p>
                                     <p></p>
                                     <p></p>
                                     <p></p>
                            </main>
                            <footer className="footer-box">
                                <input  type="text" placeholder="Say something..."></input>                                 
                            </footer>
                            </div>
                           
                        </div>
                    </div>
               </div>  
            </div> 
        );
    }
    
}
export default dashBoard;