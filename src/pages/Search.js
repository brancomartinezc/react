import React from "react"

function Search(){
    return (
        <div>
            {/* search container */}
            <div class="container search-view mt-5 pt-5 pb-5">

                <div class="row justify-content-center">
                    <div align="center" class="col-md-5 search-title"><img id="search-icon" src="@/assets/icons/search1.png" alt="..."/> Advanced Search</div>
                </div>

                <div class="form-group mt-5">

                    <div class="row">
                        <div class="col-md-2"></div>
                        {/* city filter */}
                        <div class="col-md-4">
                            <label class="category mb-2" for="city"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."/> City</label>
                            <select name="city_id" class="form-select">
                                <option value="0">
                                    All
                                </option>
                                <option >
                                    city
                                </option>
                            </select>
                        </div>

                        <div class="col-md-1"></div>
                        {/* type filter */}
                        <div class="col-md-2">
                            <div class="category"><img id="type-icon" src="@/assets/icons/building2.png" alt="..."/> Type</div>
                            <div class="form-check mt-2">
                                <label class="form-check-label label-font-size">
                                    <input type="radio" class="form-check-input" name="type" value="all" checked/>
                                    All
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <label class="form-check-label label-font-size">
                                    <input type="radio" class="form-check-input" name="type" value="house"/>
                                    House
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <label class="form-check-label label-font-size">
                                    <input type="radio" class="form-check-input" name="type" value="apartment"/>
                                    Apartment
                                </label>
                            </div>
                        </div>

                       {/* sale/rent filter */}
                        <div class="col-md-3">
                            <div class="category"><img id="status-icon" src="@/assets/icons/sale1.png" alt="..."/> Status</div> 
                            <div class="form-check mt-2">
                                <label class="form-check-label label-font-size">
                                    <input type="radio" class="form-check-input" name="sale_rent" value="all" checked/>
                                    All
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <label class="form-check-label label-font-size">
                                    <input type="radio" class="form-check-input" name="sale_rent" value="sale"/>
                                    For Sale
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <label class="form-check-label label-font-size">
                                    <input type="radio" class="form-check-input" name="sale_rent" value="rent"/>
                                    For Rent
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3 justify-content-center">
                        {/* area filter */}
                        <div class="col-md-5">
                            <div class="row justify-content-center mt-4">
                                <div class="col-md-5 category"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."/> Area (m2)</div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="min_area">Min area</label>
                                    <input class="form-control form-control-lg" type="number" id="min_area"/>
                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="max_area">Max area</label>
                                    <input class="form-control form-control-lg" type="number" id="max_area"/>
                                </div>
                            </div>
                        </div>
                        {/* price filter */}
                        <div class="col-md-5">
                            <div class="row mt-4 justify-content-center">
                                <div class="col-md-6 category"><img id="price-icon" src="@/assets/icons/coin1.png" alt="..."/> Price (U$D)</div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="min_price">Min price</label>
                                    <input class="form-control form-control-lg" type="number" id="min_price"/>
                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="max_price">Max price</label>
                                    <input class="form-control form-control-lg" type="number" id="max_price"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3 justify-content-center">
                        {/* beds filter */}
                        <div class="col-md-5">
                            <div class="row justify-content-center mt-4">
                                <div class="col-md-4 category"><img src="@/assets/icons/bed1.png" alt="..."/> Beds</div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="min_beds">Min beds</label>
                                    <input class="form-control form-control-lg" type="number" id="min_beds"/>
                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="max_beds">Max beds</label>
                                    <input class="form-control form-control-lg" type="number" id="max_beds"/>
                                </div>
                            </div>
                        </div>

                        {/* rooms filter */}
                        <div class="col-md-5">
                            <div class="row mt-4 justify-content-center">
                                <div class="col-md-4 category"><img src="@/assets/icons/room1.png" alt="..."/> Rooms</div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="min_rooms">Min rooms</label>
                                    <input class="form-control form-control-lg" type="number" id="min_rooms"/>
                                </div>
                                <div class="col-md-4">
                                    <label class="col-form-label col-form-label-lg" for="max_rooms">Max rooms</label>
                                    <input class="form-control form-control-lg" type="number" id="max_rooms"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <div class="col-md-2"></div>
                        <div class="col-md-2 category"><img src="@/assets/icons/bath1.png" alt="..."/> Baths</div>
                    </div>
                    <div class="row justify-content-around">
                        {/* baths filter */}
                        <div class="col-md-2">
                            <label class="col-form-label col-form-label-lg" for="min_baths">Min baths</label>
                            <input class="form-control form-control-lg" type="number" id="min_baths"/>
                        </div>

                        <div class="col-md-2 mt-5">
                            <a class="btn btn-primary btn-lg" id="search-btn">Search</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search