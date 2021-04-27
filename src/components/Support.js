import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCard, MDBCardBody,
  MDBMask, MDBIcon, MDBView, MDBBtn
} from 'mdbreact';

export default class Support extends Component {
  render() {

    return (
      <div>
        <div className='container-fluid' >
          <MDBContainer>
            <MDBCarousel activeItem={1} length={6}  showControls={true}  showIndicators={false}  className="z-depth-1" height="400px" width="100%" slide>
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img className="d-block w-100"  src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"  alt=" slide1" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                  <img className="d-block w-100"  src="https://mdbootstrap.com/img/Photos/Slides/img%20(44).jpg"  alt=" slide2" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                  <img className="d-block w-100"  src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"  alt=" slide3" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <img className="d-block w-100"  src="https://mdbootstrap.com/img/Photos/Slides/img%20(49).jpg"  alt=" slide5" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                  <img className="d-block w-100"  src="https://mdbootstrap.com/img/Photos/Slides/img%20(55).jpg"  alt=" slide6" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <MDBView>
                  <img className="d-block w-100"  src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"  alt=" slide7" />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
        <div>
          <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Recent posts
        </h2>
              <p className="text-center w-responsive mx-auto mb-5">
                Well..!! the company has been helping a many users from years to plan and enjoy there trips throughout the world. In alll these years we have
                helped our customers in every way possible so that they don't have to face any difficultyt during their trip . Here are some of the articles related to our services.
        </p>
              <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src="/images/pic6.jpg"
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="pink-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="map" className="pr-2" />
                Adventure
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Top Ski Blogs</strong>
                  </h4>
                  <p>
                    by <a href="#!" className="font-weight-bold">Tom Sawyer</a>,
              15/07/2020
            </p>
                  <p className="dark-grey-text">
                    Iglu Ski presents the best ski and snowboard travel blogs in the industry. As well
                    as our own expert news and blogs, we’ve searched the internet and found the most
                    inspiring winter sports blogs. Whether you’re counting down the days until your snow fix or
                    looking for inspiration for your next adventure, warm your hands
                    around a hot mug of coffee and peruse a few of our favourite ski and snowboard blogs to catch up on the latest word from the slopes.
            </p>
                  <MDBBtn color="pink" rounded size="md">
                    Read more
            </MDBBtn>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="graduation-cap" className="pr-2" />
                Travel
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Be My Travel Muse</strong>
                  </h4>
                  <p>
                    by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              13/07/2020
            </p>
                  <p className="dark-grey-text">
                    Be My Travel Muse is ideal for people who want to travel more adventurously or who want to hit the road solo.
                    While you may not go to the extreme of quitting your job, selling all your belongings, and traveling with nothing bu
                    t a carry-on bag like Kristin did, you may decide to go to an exotic place and travel as unlike a tourist as possible.
            </p>
                  <MDBBtn color="deep-orange" rounded size="md">
                    Read more
            </MDBBtn>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="blue-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="fire" className="pr-2" />
                Culture
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Country Culture</strong>
                  </h4>
                  <p>
                    by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              11/07/2018
            </p>
                  <p className="dark-grey-text">
                    The Culture 365 Blog is your source for innovative and inspirational stories of cultural engagement
                    and participation from across the country. In the Culture 365 blog, Culture Days extends the conversation all
                    year-round, highlighting best practices and lessons from writers and contributors who represent not-for-profit cultural
                    organizations, individual artists and cultural creators from all walks of life.
            </p>
                  <MDBBtn color="info" rounded size="md">
                    Read more
            </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              WRITE TO US
      </h2>
            <p className="text-center w-responsive mx-auto pb-5">
              We take all sort of query and doubts of our customers regarding their plans and trips throughout the world. 
              Also these will be answered as soon as possible.
      </p>
            <MDBRow>
              <MDBCol lg="5" className="lg-0 mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div >
                      <h3 className="mt-4">
                        <MDBIcon icon="envelope" className="pr-2" />
                Write to us:
              </h3>
                    </div>
                    <p className="dark-grey-text">
                      We'll write rarely, but only the best content.
              </p>
                    <div className="md-form">
                      <MDBInput
                        icon="user"
                        label="Your name"
                        iconClass="grey-text"
                        type="text"
                        id="form-name"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="envelope"
                        label="Your email"
                        iconClass="grey-text"
                        type="text"
                        id="form-email"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="tag"
                        label="Subject"
                        iconClass="grey-text"
                        type="text"
                        id="form-subject"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="pencil-alt"
                        label="Icon Prefix"
                        iconClass="grey-text"
                        type="textarea"
                        id="form-text"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="light-blue">Submit</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="7">
                <div
                  id="map-container"
                  className="rounded z-depth-1-half map-container"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                    title="This is a unique title"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                  />
                </div>
                <br />
                <MDBRow className="text-center">
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="map-marker-alt" />
                    </MDBBtn>
                    <p>Toronto</p>
                    <p className="mb-md-0">Canada</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="phone" />
                    </MDBBtn>
                    <p>+ 01 234 567 89</p>
                    <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <p>info@gmail.com</p>
                    <p className="mb-md-0">TravelAnyday@gmail.com</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>
        </div>
      </div>
    )
  }
}






