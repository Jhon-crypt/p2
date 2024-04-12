import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, SelectBox, CheckBox, Input, Heading } from "../../components";
import AdminOverviewCards from "../../components/AdminOverviewCards";
import AdminOverviewCards1 from "../../components/AdminOverviewCards1";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AdminoverviewPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Point2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebar
            width="291px !important"
            className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-50 py-9 md:hidden md:p-5 sm:py-5"
          >
            <div className="mb-2 flex flex-col items-center self-stretch">
              <div className="flex flex-col">
                <Heading size="s" as="h1" className="text-center !text-light_blue-800">
                  Point2{" "}
                </Heading>
                <Text size="lg" as="p" className="relative mt-[-5px] !text-gray-900">
                  Admin Dashboard
                </Text>
              </div>
              <div className="mt-[79px] flex flex-col items-end self-stretch">
                <div className="self-stretch" />
                <div className="relative mt-[-51px] flex items-start gap-[9px] self-start">
                  <div className="mb-[9px] flex py-[9px]">
                    <Text size="lg" as="p" className="!text-blue_gray-800">
                      Overview
                    </Text>
                  </div>
                  <Img src="images/img_lucide_mouse_pointer.svg" alt="lucidemouse_one" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="ml-4 mt-[9px] flex self-start p-1.5 md:ml-0">
                <Text size="lg" as="p" className="mt-[5px] !text-blue_gray-800">
                  Account Management
                </Text>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    paddingLeft: "21px",
                    alignSelf: "start",
                    color: "#344053",
                    fontWeight: 400,
                    fontSize: "16px",
                  },
                }}
                className="mt-[18px] w-full self-stretch pb-[116px] md:pb-5"
              >
                <div className="flex flex-col gap-[0.11px]">
                  <MenuItem
                    suffix={
                      <div className="h-[22px] w-[8%] self-end rounded-[11px] bg-amber-300">
                        <Img src="images/img_3.svg" alt="three_one" className="mx-auto mt-2 h-[19px]" />
                      </div>
                    }
                  >
                    Order
                  </MenuItem>
                  <MenuItem>Customers</MenuItem>
                </div>
                <div className="mt-[59px] flex justify-center pr-6 sm:pr-5">
                  <div className="flex py-2">
                    <Text size="md" as="p" className="!text-blue_gray-800">
                      Riders
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[0.11px]">
                  <MenuItem>Support & Feedbacks</MenuItem>
                  <MenuItem>Feedback & Review</MenuItem>
                  <MenuItem>Promotions</MenuItem>
                  <MenuItem>Role Management</MenuItem>
                  <MenuItem>Roles</MenuItem>
                </div>
              </Menu>
              <div className="mt-[239px] flex w-[52%] flex-col items-center gap-2 p-2 md:w-full">
                <Img src="images/img_ellipse_24.png" alt="circleimage" className="h-[64px] w-[64px] rounded-[50%]" />
                <Text size="md" as="p" className="text-center !font-poppins leading-[30px] !text-blue_gray-800">
                  <span className="font-satoshi text-xl font-bold text-blue_gray-800">
                    <>
                      Jamal Kareem
                      <br />
                    </>
                  </span>
                  <span className="font-satoshi text-sm font-medium text-blue_gray-800">JK12d@gmail.com</span>
                </Text>
              </div>
              <Button
                rightIcon={
                  <Img src="images/img_interface_exit.svg" alt="Interface / Exit" className="h-[24px] w-[24px]" />
                }
                className="mt-8 flex h-[44px] min-w-[150px] items-center justify-center gap-2 rounded-lg bg-red-400_26 px-[30px] text-center text-base font-bold text-red-400 shadow-xs sm:px-5"
              >
                Log out
              </Button>
            </div>
          </Sidebar>
          <div className="flex-1 md:self-stretch md:p-5">
            <header className="bg-gray-50 p-[27px] sm:p-5">
              <div className="mt-[15px] flex items-center justify-between gap-5 md:flex-col">
                <Text size="2xl" as="p" className="!text-blue_gray-800">
                  Overview
                </Text>
                <div className="flex w-[42%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  <Input
                    name="search"
                    placeholder={`Track Package`}
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e)}
                    prefix={
                      <Img src="images/img_search.svg" alt="search" className="h-[24px] w-[24px] cursor-pointer" />
                    }
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#475466ff" />
                      ) : null
                    }
                    className="flex h-[40px] w-[68%] items-center justify-center gap-2 rounded-lg bg-indigo-50 pl-3 pr-[35px] text-sm font-medium text-blue_gray-700 sm:w-full sm:pr-5"
                  />
                  <div className="flex w-[25%] items-center justify-center gap-6 sm:w-full">
                    <Img src="images/img_outline_bell.svg" alt="outlinebell_one" className="h-[24px] w-[24px]" />
                    <div className="flex flex-1 items-center justify-center gap-2 py-2 pl-2">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="circleimage_one"
                        className="h-[40px] w-[40px] rounded-[50%]"
                      />
                      <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col gap-[46px] rounded-tl-lg bg-white-A700 p-[25px] sm:p-5">
              <div className="mt-[17px] flex gap-[23px] md:flex-col">
                <AdminOverviewCards
                  totalriders="Total Income"
                  threehundred="3,000,000.00"
                  className="flex flex-col items-start justify-center gap-4 rounded-lg border border-solid border-blue_gray-100 bg-white-A700 p-4"
                />
                <AdminOverviewCards1 className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border border-solid border-blue_gray-100 bg-white-A700 p-4" />
                <AdminOverviewCards
                  lightbulbOne="images/img_light_bulb.svg"
                  change="20%"
                  vsLastMonth="vs last month"
                  className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border border-solid border-blue_gray-100 bg-white-A700 p-4"
                />
                <AdminOverviewCards1
                  totalriders="Total Orders"
                  className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border border-solid border-blue_gray-100 bg-white-A700 p-4"
                />
              </div>
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[58%] flex-col items-start gap-[26px] md:w-full">
                  <div className="flex w-[40%] items-center gap-[15px] md:w-full">
                    <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-[25px] bg-gray-50">
                      <Img src="images/img_thumbs_up.svg" />
                    </Button>
                    <div className="flex flex-1 flex-col items-start gap-1">
                      <CheckBox
                        name="totalincome"
                        label="Total Income"
                        id="totalincome"
                        className="flex gap-2 py-px pr-8 text-left text-lg font-medium text-blue_gray-700 sm:pr-5"
                      />
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Img
                            src="images/img_arrow_down_red_400.svg"
                            alt="arrowdown_three"
                            className="h-[20px] w-[20px]"
                          />
                          <Text size="s" as="p" className="text-center !text-red-400">
                            10%
                          </Text>
                        </div>
                        <Text size="s" as="p">
                          vs last month
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end gap-1 self-stretch rounded-lg border border-solid border-blue_gray-100 bg-white-A700">
                    <div className="mt-3.5 h-[333px] bg-[url(/public/images/img_group_8.svg)] bg-cover bg-no-repeat md:h-auto">
                      <div className="h-[333px] bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat md:h-auto">
                        <div className="flex h-[333px] items-start justify-end bg-[url(/public/images/img_group_10.svg)] bg-cover bg-no-repeat md:h-auto">
                          <div className="mb-[159px] mr-[9px] flex w-[42%] flex-col items-start md:mr-0 md:w-full md:p-5">
                            <SelectBox
                              indicator={
                                <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[24px] w-[24px]" />
                              }
                              name="thisyear"
                              placeholder={`This year`}
                              options={dropDownOptions}
                              className="flex w-[39%] gap-px self-end rounded-lg border border-solid border-blue_gray-100 py-2.5 pl-3 pr-[35px] text-sm font-medium text-blue_gray-700 sm:pr-5"
                            />
                            <Button className="mt-[77px] flex h-[34px] min-w-[97px] items-center justify-center rounded-lg bg-light_blue-800 px-2.5 text-center text-xs font-bold text-blue-50">
                              N50,000.00
                            </Button>
                            <div className="ml-[41px] mt-1.5 h-[14px] w-[14px] rounded-[7px] border-2 border-solid border-blue-50 bg-light_blue-800 md:ml-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-1.5 flex flex-wrap gap-8 self-start">
                      <Text as="p">JAN</Text>
                      <Text as="p">FEB</Text>
                      <Text as="p">MAR</Text>
                      <Text as="p">APR</Text>
                      <Text as="p">MAY</Text>
                      <Text as="p">JUN</Text>
                      <Text as="p">JUL</Text>
                      <Text as="p">AUG</Text>
                      <Text as="p">SEP</Text>
                      <Text as="p">OCT</Text>
                      <Text as="p">NOV</Text>
                      <Text as="p">DEC</Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[37%] flex-col items-start gap-6 md:w-full">
                  <div className="flex w-[91%] items-center gap-[15px] md:w-full sm:flex-col">
                    <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-[25px] bg-gray-50">
                      <Img src="images/img_component_1_light_blue_800.svg" />
                    </Button>
                    <div className="flex flex-1 flex-col gap-1 sm:self-stretch">
                      <div className="flex">
                        <Text size="lg" as="p" className="!text-blue_gray-700">
                          Delivery Rate
                        </Text>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex flex-1 items-start gap-1">
                          <div className="mt-0.5 h-[10px] w-[10px] rounded-[5px] bg-light_blue-800" />
                          <Text as="p" className="text-center">
                            On-time:45%
                          </Text>
                        </div>
                        <div className="mt-1 h-[10px] w-[10px] rounded-[5px] bg-blue_gray-800" />
                        <Text as="p">Running-Late:15%</Text>
                        <div className="mt-1 h-[10px] w-[10px] rounded-[5px] bg-teal-200" />
                        <Text as="p">In-Transit:40%</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-center self-stretch rounded-lg border border-solid border-blue_gray-100 bg-white-A700 p-6 sm:p-5">
                    <Button className="relative z-[1] mt-[34px] flex h-[34px] min-w-[116px] items-center justify-center rounded-lg bg-blue-50 px-2.5 text-center text-xs font-bold text-light_blue-800">
                      40% (12 Orders)
                    </Button>
                    <div className="relative my-[15px] ml-[-78px] h-[300px] w-[300px] md:h-auto">
                      <div className="flex flex-col items-center gap-1">
                        <Text size="s" as="p" className="text-center">
                          Deliveries
                        </Text>
                        <Text size="xl" as="p" className="text-center !text-blue_gray-900">
                          32
                        </Text>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] w-[300px] md:h-auto">
                        <CircularProgressbar
                          strokeWidth={14}
                          value={16}
                          styles={{ trail: { stroke: "#0077b6" }, path: { strokeLinecap: "square" } }}
                          className="h-[300px] w-full border border-solid border-white-A700"
                        />
                        <CircularProgressbar
                          strokeWidth={14}
                          value={25}
                          styles={{
                            trail: { stroke: "#0077b6" },
                            path: { strokeLinecap: "square", transformOrigin: "center", transform: "rotate(209deg)" },
                          }}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] w-full border border-solid border-white-A700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12 flex flex-col gap-[18px]">
                <div className="flex items-start justify-between gap-5 md:flex-col">
                  <div className="mt-2 flex w-[16%] flex-col gap-1 md:w-full">
                    <div className="flex">
                      <Text size="lg" as="p" className="!text-blue_gray-700">
                        Orders
                      </Text>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex w-[42%] items-center justify-center gap-1">
                        <div className="h-[10px] w-[10px] rounded-[5px] bg-light_blue-800" />
                        <Text size="s" as="p" className="text-center">
                          Delivered
                        </Text>
                      </div>
                      <div className="h-[10px] w-[10px] rounded-[5px] bg-teal-300" />
                      <Text size="s" as="p">
                        Not Delivered
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[39%] justify-center gap-3 p-2 md:w-full sm:flex-col">
                    <Button className="flex h-[36px] w-full flex-1 items-center justify-center rounded-lg border border-solid border-blue-700 bg-blue-50 px-[9px] text-center text-sm font-medium text-light_blue-800 sm:self-stretch">
                      This year
                    </Button>
                    <Button className="flex h-[36px] w-full flex-1 items-center justify-center rounded-lg border border-solid border-blue_gray-100 px-[9px] text-center text-sm font-medium text-blue_gray-700 sm:self-stretch">
                      6 months
                    </Button>
                    <Button className="flex h-[36px] w-full flex-1 items-center justify-center rounded-lg border border-solid border-blue_gray-100 px-[9px] text-center text-sm font-medium text-blue_gray-700 sm:self-stretch">
                      30 days
                    </Button>
                    <Button className="flex h-[36px] min-w-[64px] items-center justify-center rounded-lg border border-solid border-blue_gray-100 px-[9px] text-center text-sm font-medium text-blue_gray-700">
                      7 days
                    </Button>
                    <Button className="flex h-[36px] w-full flex-1 items-center justify-center rounded-lg border border-solid border-blue_gray-100 px-[9px] text-center text-sm font-medium text-blue_gray-700 sm:self-stretch">
                      24 hours
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end pb-3.5">
                  <div className="flex items-center gap-[17px] self-stretch md:flex-col">
                    <div className="flex flex-col items-center justify-center gap-[59px] py-[7px] sm:gap-[29px]">
                      <Text as="p">300</Text>
                      <Text as="p">200</Text>
                      <Text as="p">150</Text>
                      <Text as="p">100</Text>
                      <Text as="p">0</Text>
                    </div>
                    <div className="flex-1 rounded-lg border border-solid border-blue_gray-100 bg-white-A700 p-[15px] md:self-stretch">
                      <Img src="images/img_frame_473.svg" alt="image" className="mt-0.5 h-[278px] w-full md:h-auto" />
                    </div>
                  </div>
                  <div className="relative mt-[-1px] flex w-[94%] flex-wrap justify-between gap-5 md:w-full">
                    <Text as="p" className="ml-1.5">
                      JAN
                    </Text>
                    <Text as="p">FEB</Text>
                    <Text as="p">MAR</Text>
                    <Text as="p">APR</Text>
                    <Text as="p">MAY</Text>
                    <Text as="p">JUN</Text>
                    <Text as="p">JUL</Text>
                    <Text as="p">AUG</Text>
                    <Text as="p">SEP</Text>
                    <Text as="p">OCT</Text>
                    <Text as="p">NOV</Text>
                    <Text as="p" className="mr-1.5">
                      DEC
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
