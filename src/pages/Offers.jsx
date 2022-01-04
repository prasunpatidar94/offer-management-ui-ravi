import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HostManagement } from "../component/HostManagement";
import InputText from "../component/InputText";
import LazyLoadindDataGrid from "../component/LazyLoadindDataGrid";
import Loading from "../component/Loading";
import UpperHeader from "../component/UpperHeader";
import UpdateIcon from '@mui/icons-material/Update';
import { NonEditableDataTable } from "../component/OffersComponent";
import DropDownMaterialUI from "../component/DropDownMaterialUI";
import CancelIcon from '@mui/icons-material/Cancel';

function Offers() {

    const email = "abhisheksinha@titan.co.in";
    const [loader, setLoader] = useState(false);
    const [updateWindowFlage, setupdateWindowFlage] = useState(false);

    const [offersData, setOffersData] = useState({

        cols: [],
        rows: [],

    });
    const [OfferUpdate, setOfferUpdate] = useState({
        active: "",
        category: "",
        channel: "",
        cluster: "",
        fromDate: "",
        gepClubbing: "",
        id: 1,
        offerDescription: "",
        offerName: "",
        offerType: "",
        region: "",
        salesValue: "",
        toDate: "",
        weightPriceBand: "",
    });



    useEffect(() => {

        setImmediate(() => {
            setLoader(true)
        });
        axios.get(`${HostManagement.OffersMain}offer/get/offer/details/${email}`)
            .then((response) => {

                if (response.data.code === "1000") {
                    setImmediate(() => {
                        setOffersData({
                            cols: response.data.info,
                            rows: response.data.value,
                        })
                    });
                } else {
                    alert("issue : " + response.data.value)
                    setImmediate(() => {
                        setOffersData({
                            cols: [],
                            rows: [],
                        })
                    });
                }
            }, (error) => {
                console.log(error);
                alert(error);

                setImmediate(() => {
                    setOffersData({
                        cols: [],
                        rows: [],
                    })
                });
            });

        setTimeout(() => {
            setImmediate(() => {
                setLoader(false)
            });
        }, 1500);


    }, []);


    function rowDataHandler(row) {

        console.log("row data is the ", row);
        setImmediate(() => {
            setOfferUpdate(row);
            setupdateWindowFlage(true);


        })

    }



    function OfferUpdateChangeHandler(event) {

        const { name, value } = event.target;
        setImmediate(() => {
            setOfferUpdate((old) => ({
                ...old,
                [name]: value,
            }))

        })

    }

    function cancelHandler() {
        setImmediate(() => {
            setupdateWindowFlage(false);
        })
        setTimeout(() => {
            setImmediate(() => {
                setLoader(false);
            })
        }, 500);

    }


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} >
                    <UpperHeader />
                    <Loading
                        flag={loader}
                    />
                </Grid>
                {(updateWindowFlage) ?
                    <Grid item xs={12} sm={12}>
                        <br />
                        <Container maxWidth="md" component={Paper} style={{ backgroundColor: "#e8eaf6" }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={12}>
                                    <NonEditableDataTable
                                        row={OfferUpdate}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputText

                                        lableName="From Date"
                                        typeName="date"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        value={OfferUpdate.fromDate}
                                        name="fromDate"
                                        fullSizeBool={true}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputText

                                        lableName="ToDate"
                                        typeName="date"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        value={OfferUpdate.toDate}
                                        name="toDate"
                                        fullSizeBool={true}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputText

                                        lableName="Weight Price Band"
                                        typeName="text"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        value={OfferUpdate.weightPriceBand}
                                        name="weightPriceBand"
                                        fullSizeBool={true}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputText

                                        lableName="Offer Description"
                                        typeName="text"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        value={OfferUpdate.offerDescription}
                                        name="offerDescription"
                                        fullSizeBool={true}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <DropDownMaterialUI

                                        lableName="GEP Clubbing"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        optionsList={["Yes", "No"]}
                                        value={OfferUpdate.gepClubbing}
                                        name="gepClubbing"

                                    />
                                </Grid>


                                <Grid item xs={12} sm={6}>
                                    <DropDownMaterialUI

                                        lableName="Region"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        optionsList={["North 1", "East 1", "South 1", "West 1"]}
                                        value={OfferUpdate.region}
                                        name="region"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputText

                                        lableName="SalesValue"
                                        typeName="text"
                                        onChangeHandler={OfferUpdateChangeHandler}
                                        value={OfferUpdate.salesValue}
                                        name="salesValue"
                                        fullSizeBool={true}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Button variant="contained" color="success" startIcon={<UpdateIcon />} fullWidth >Update</Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button variant="contained" color="error" startIcon={<CancelIcon />} fullWidth onClick={() => {
                                                cancelHandler();
                                                setImmediate(() => {
                                                    setLoader(true)
                                                });
                                            }} >Cancel</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <br />
                        </Container>
                    </Grid> : <br />}
                <Grid item xs={12} sm={12}>
                    {(offersData.rows[0]) ? <Container maxWidth="xl" >
                        <LazyLoadindDataGrid

                            col={offersData.cols}
                            rows={offersData.rows}
                            reportLable="Offers"
                            rowDataHandler={rowDataHandler}
                        />
                    </Container> :
                        <Typography variant="h3" color="royalblue" align="center"> Data Not Found ...!</Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={12}>
                    {/* footer */}
                </Grid>

            </Grid>
        </>
    );
}

export default Offers;