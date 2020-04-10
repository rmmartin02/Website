import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {Container, Form, Grid, Input, Label} from "semantic-ui-react";
import Utils from "../Common/Utils";
import PolylineOverlay from "../Common/PolylineOverlay";

const TOKEN = "pk.eyJ1Ijoicm1tYXJ0aW4wMiIsImEiOiJjazhzeGVnZHcwZTJ4M2ZwYWN0bWY2ZTh3In0.vjI-gVYxkKLmWzVp7uevjg";

export const IbtracPage = props => (
    <Container style={{ marginTop: '7em', width: "100vw", height: "100vh" }}>
        <Container>
            <Form>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <label>Season</label>
                        <Form.Dropdown
                            fluid
                            id="season"
                            placeholder='2001'
                            multiple
                            search
                            options={props.ibtracOptions.season}
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Basin</label>
                        <Form.Dropdown
                            fluid
                            id="basin"
                            placeholder='ATL'
                            multiple
                            search
                            options={props.ibtracOptions.basin}
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Subbasin</label>
                        <Form.Dropdown
                            fluid
                            id="subbasin"
                            placeholder='ATL'
                            multiple
                            search
                            options={props.ibtracOptions.subbasin}
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Storm Name</label>
                        <Form.Dropdown
                            fluid
                            id="name"
                            placeholder="Isabel"
                            multiple
                            search
                            options={props.ibtracOptions.name}
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <label>Only 3 Hour Points</label>
                        <Form.Checkbox
                            id="threeHour"
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Wind</label>
                        <Input
                            id="wind_min"
                            placeholder="Min"
                            type="number"
                            onChange={props.handleInputChange}
                            labelPosition='right'
                        >
                            <Label basic>{props.ibtracOptions.wind ? props.ibtracOptions.wind.min.wind || "0" : "0"}</Label>
                                <input />
                            <Label>{Utils.IBTRACS_KEYS["wmo_wind"]}</Label>
                        </Input>
                        <Input
                            id="wind_max"
                            placeholder="Max"
                            type="number"
                            onChange={props.handleInputChange}
                            labelPosition='right'
                        >
                            <Label basic>{props.ibtracOptions.wind ? props.ibtracOptions.wind.max.wind || "0"  : "0"}</Label>
                                <input />
                            <Label>{Utils.IBTRACS_KEYS["wmo_wind"]}</Label>
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Pressure</label>
                        <Input
                            id="pres_min"
                            placeholder="Min"
                            type="number"
                            label={Utils.IBTRACS_KEYS["wmo_pres"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                        <Input
                            id="pres_max"
                            placeholder="Max"
                            type="number"
                            label={Utils.IBTRACS_KEYS["wmo_pres"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Gust</label>
                        <Input
                            id="gust_min"
                            placeholder="Min"
                            type="number"
                            label={Utils.IBTRACS_KEYS["wmo_wind"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                        <Input
                            id="gust_max"
                            placeholder="Max"
                            type="number"
                            label={Utils.IBTRACS_KEYS["wmo_wind"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Form.Field>
                        <label>Latitude</label>
                        <Input
                            id="lat_min"
                            placeholder="Min"
                            type="number"
                            label={Utils.IBTRACS_KEYS["lat"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                        <Input
                            id="lat_max"
                            placeholder="Max"
                            type="number"
                            label={Utils.IBTRACS_KEYS["lat"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Longitude</label>
                        <Input
                            id="lon_min"
                            placeholder="Min"
                            type="number"
                            label={Utils.IBTRACS_KEYS["lon"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                        <Input
                            id="lon_max"
                            placeholder="Max"
                            type="number"
                            label={Utils.IBTRACS_KEYS["lon"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Distance to Land</label>
                        <Input
                            id="dist2land_min"
                            placeholder="Min"
                            type="number"
                            label={Utils.IBTRACS_KEYS["dist2land"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                        <Input
                            id="dist2land_max"
                            placeholder="Max"
                            type="number"
                            label={Utils.IBTRACS_KEYS["dist2land"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Storm Speed</label>
                        <Input
                            id="speed_min"
                            placeholder="Min"
                            type="number"
                            label={Utils.IBTRACS_KEYS["storm_speed"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                        <Input
                            id="speed_max"
                            placeholder="Max"
                            type="number"
                            label={Utils.IBTRACS_KEYS["storm_speed"]}
                            labelPosition='right'
                            onChange={props.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
        </Container>
        <Container style={{ width: "100%", height: "65%" }}>
            <ReactMapGL
                width={"100%"}
                height={"100%"}
                {...props.viewport}
                mapboxApiAccessToken={TOKEN}
                onViewportChange={props.onViewPortChange}
            >
                <PolylineOverlay points={props.points} />
            </ReactMapGL>
        </Container>
    </Container>
);