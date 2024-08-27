const busesList = [ // current as of feb 29 2024
    {
        name: "B1 Bay Ridge - Manhattan Beachvia 86th St / Ocean Pkwy",
        code: "B1"
    },
    {
        name: "B2 Kings Hwy Station - Kings Plazavia Avenue R / Avenue S",
        code: "B2"
    },
    {
        name: "B3 Bensonhurst - Bergen Beachvia Avenue U",
        code: "B3"
    },
    {
        name: "B4 Bay Ridge - Sheepshead Bayvia Bay Ridge Pkwy / 86th St / Avenue Z",
        code: "B4"
    },
    {
        name: "B6 Bath Beach - East New Yorkvia Bay Pkwy / Avenue J / Flatlands Av",
        code: "B6"
    },
    {
        name: "B7 Midwood - Bedford-Stuyvesantvia Kings Hwy / Saratoga Av",
        code: "B7"
    },
    {
        name: "B8 Dyker Heights - East Flatbushvia 18th Av / Foster Av / Avenue D",
        code: "B8"
    },
    {
        name: "B9 Bay Ridge - Kings Plazavia 60th St / Avenue M",
        code: "B9"
    },
    {
        name: "B11 Sunset Park - Midwoodvia 49th & 50th St / Avenue J",
        code: "B11"
    },
    {
        name: "B12 Lefferts Gardens - East New Yorkvia Clarkson Av / Empire Blvd / East New York Av",
        code: "B12"
    },
    {
        name: "B13 Spring Creek - Wyckoff Hospitalvia Crescent St / Jamaica Av / Wyckoff Av",
        code: "B13"
    },
    {
        name: "B14 Spring Creek - Crown Heightsvia Sutter Av / Pitkin Av",
        code: "B14"
    },
    {
        name: "B15 Bedford Stuyvesant - JFK Airportvia Marcus Garvey Blvd / New Lots Av",
        code: "B15"
    },
    {
        name: "B16 Bay Ridge - Lefferts Gardensvia Ft Hamilton Pkwy / 13th & 14th Av",
        code: "B16"
    },
    {
        name: "B17 Canarsie - Crown Heightsvia Remsen Av / Seaview Av",
        code: "B17"
    },
    {
        name: "B20 Ridgewood - Spring Creekvia Pennsylvania Av / Decatur St",
        code: "B20"
    },
    {
        name: "B24 Williamsburg - Greenpointvia Greenpoint Av & 48th St / Meeker Av",
        code: "B24"
    },
    {
        name: "B25 Dwntn Bklyn & DUMBO - Broadway Junctionvia Fulton St",
        code: "B25"
    },
    {
        name: "B26 Downtown Brooklyn - Ridgewoodvia Halsey St / Fulton St",
        code: "B26"
    },
    {
        name: "B31 Gerritsen Beach - Kings Hwy Stationvia Gerritsen Av / Avenue R",
        code: "B31"
    },
    {
        name: "B32 Williamsburg - Long Island Cityvia Kent Av / Wythe Av",
        code: "B32"
    },
    {
        name: "B35 Brownsville - Sunset Parkvia Church Av / 39th St",
        code: "B35"
    },
    {
        name: "B36 Sheepshead Bay - Coney Islandvia Avenue Z / Surf Av",
        code: "B36"
    },
    {
        name: "B37 Downtown Brooklyn - Bay Ridgevia 3rd Av",
        code: "B37"
    },
    {
        name: "B38 Ridgewood - Downtown Brooklynvia DeKalb & Lafayette Av",
        code: "B38"
    },
    {
        name: "B39 Williamsburg Bridge Plaza - Lower East Sidevia Williamsburg Bridge / Delancey St",
        code: "B39"
    },
    {
        name: "B41 Kings Plaza - Downtown Brooklynvia Flatbush Av / Livingston St",
        code: "B41"
    },
    {
        name: "B42 Canarsie Pier - Rockaway Parkway Stationvia Rockaway Pkwy",
        code: "B42"
    },
    {
        name: "B43 Greenpoint - Lefferts Gardensvia Manhattan Av / Graham Av / Tompkins Av / Throop Av",
        code: "B43"
    },
    {
        name: "B44 Sheepshead Bay - Williamsburgvia Nostrand Av",
        code: "B44"
    },
    {
        name: "B44-SBS Sheepshead Bay - WilliamsburgSelect Bus Service via Nostrand Av",
        code: "B44-SBS"
    },
    {
        name: "B45 Downtown Brooklyn - Crown Heightsvia St Johns Place / Washington Av / Atlantic Av",
        code: "B45"
    },
    {
        name: "B46 Kings Plaza - Williamsburgvia Utica Av - Malcolm X Blvd",
        code: "B46"
    },
    {
        name: "B46-SBS Kings Plaza - WilliamsburgSelect Bus Service via Utica Av - Malcolm X Blvd",
        code: "B46-SBS"
    },
    {
        name: "B47 Kings Plaza - Bedford-Stuyvesantvia Broadway / Ralph Av / Avenue U",
        code: "B47"
    },
    {
        name: "B48 Lefferts Gardens - Greenpointvia Lorimer St / Franklin & Classon Av",
        code: "B48"
    },
    {
        name: "B49 Manhattan Beach - Bedford-Stuyvesantvia Ocean Av / Bedford & Rogers Av",
        code: "B49"
    },
    {
        name: "B52 Downtown Brooklyn - Ridgewoodvia Gates Av / Greene Av / Atlantic Av",
        code: "B52"
    },
    {
        name: "B54 Downtown Brooklyn - Ridgewoodvia Myrtle Av",
        code: "B54"
    },
    {
        name: "B57 Gowanus - Maspethvia Flushing Av",
        code: "B57"
    },
    {
        name: "B60 Williamsburg - Canarsievia Wilson Av / Rockaway Av",
        code: "B60"
    },
    {
        name: "B61 Park Slope - Downtown Brooklynvia Van Brunt St / Columbia St / 9th St",
        code: "B61"
    },
    {
        name: "B62 Downtown Brooklyn - Long Island Cityvia Bklyn Navy Yard / Manhattan Av / Jackson Av",
        code: "B62"
    },
    {
        name: "B63 Bay Ridge - Cobble Hillvia 5th Av / Atlantic Av",
        code: "B63"
    },
    {
        name: "B64 Bay Ridge - Coney Islandvia Bay Ridge Av / Bath Av",
        code: "B64"
    },
    {
        name: "B65 Downtown Brooklyn - Crown Heightsvia Bergen St & Dean St",
        code: "B65"
    },
    {
        name: "B67 Brooklyn Navy Yard - Kensingtonvia Flatbush Av / 7th Av / McDonald Av",
        code: "B67"
    },
    {
        name: "B68 Coney Island - Windsor Terracevia Coney Island Av / Brighton Beach Av",
        code: "B68"
    },
    {
        name: "B69 Downtown Brooklyn - Kensingtonvia Vanderbilt Av / 7th Av / McDonald Av",
        code: "B69"
    },
    {
        name: "B70 Dyker Heights - Sunset Parkvia 92nd St / 3rd Av / 8th Av",
        code: "B70"
    },
    {
        name: "B74 Sea Gate - Stillwell Avvia Mermaid Av",
        code: "B74"
    },
    {
        name: "B82 Coney Island - Spring Creek Towersvia Bay Pkwy / Kings Hwy / Flatlands Av",
        code: "B82"
    },
    {
        name: "B82-SBS Coney Island -spring Creek Towersselect Bus service via Bay Pkwy / Kings Hwy / Flatlands Av",
        code: "B82-SBS"
    },
    {
        name: "B83 Spring Creek - Broadway Junctionvia Van Siclen Av / Pennsylvania Av / Gateway Dr",
        code: "B83"
    },
    {
        name: "B84 Spring Creek-New Lotsvia Ashford Street/Flatlands Avenue",
        code: "B84"
    },
    {
        name: "B90 F Shuttle Bus - Church Av - Stillwell Avvia McDonald Av",
        code: "B90"
    },
    {
        name: "B96 2 Shuttle Bus - Flatbush Ave - Franklin Avevia Nostrand Av/New York Av",
        code: "B96"
    },
    {
        name: "B98 G Shuttle Bus - Bedford/Nostrand Av - Court Sqvia Jackson Av/Union Av",
        code: "B98"
    },
    {
        name: "B100 Mill Basin - MidwoodVia Fillmore Av / Quentin Rd",
        code: "B100"
    },
    {
        name: "B103 Canarsie - Downtown Brooklyn LtdVia Ave M / Ave H / 3Rd & 4Th Ave",
        code: "B103"
    },
    {
        name: "BM1 Mill Basin - Downtown/MidtownVia E 66 St / Ave K / Ocean Av / Cortelyou Rd",
        code: "BM1"
    },
    {
        name: "BM2 Canarsie/Spring Creek - Downtown/MidtownVia Ave M/ Ave H / Cortelyou Rd",
        code: "BM2"
    },
    {
        name: "BM3 Sheepshead Bay - Downtown/MidtownVia Sheepshead Bay / Ocean Ave / Cortelyou Rd",
        code: "BM3"
    },
    {
        name: "BM4 Gerritsen Beach - Downtown/MidtownVia Gerritsen Av / Nostrand Av / Ocean Av",
        code: "BM4"
    },
    {
        name: "BM5 Spring Creek - MidtownVia Pennsylvania Av / Linden Blvd / Woodhaven Blvd",
        code: "BM5"
    },
    {
        name: "Bx1 Riverdale - Mott Havenvia Grand Concourse / E 138th St",
        code: "Bx1"
    },
    {
        name: "Bx2 Kingsbridge Heights - Mott Havenvia Grand Concourse / E 149th St",
        code: "Bx2"
    },
    {
        name: "Bx3 Riverdale - George Washington Bridgevia Sedgwick Av / University Av / W 181st St",
        code: "Bx3"
    },
    {
        name: "Bx4 Westchester Sq - The Hubvia Westchester Av",
        code: "Bx4"
    },
    {
        name: "Bx4A Westchester Sq - Gladstone Sqvia Metropolitan Av / Westchester Av",
        code: "Bx4A"
    },
    {
        name: "Bx5 Pelham Bay - Gladstone Sqvia Bruckner Blvd  / Story Av",
        code: "Bx5"
    },
    {
        name: "Bx6 Hunts Point - Riverside Drvia E 161st St / E 163rd St / W 155 St",
        code: "Bx6"
    },
    {
        name: "Bx6-SBS Hunts Point - Riverside DrSelect Bus Service via E 161st St / E 163rd St / W 155 St",
        code: "Bx6-SBS"
    },
    {
        name: "Bx7 Riverdale - Washington Heightsvia Riverdale Av / Broadway",
        code: "Bx7"
    },
    {
        name: "Bx8 Williamsbridge - Locust Pointvia Bronxwood Av / Williamsbridge Rd / Crosby Av",
        code: "Bx8"
    },
    {
        name: "Bx9 Riverdale - West Farms Sqvia Broadway / Kingsbridge Rd / Southern Blvd",
        code: "Bx9"
    },
    {
        name: "Bx10 Riverdale - Norwoodvia H. Hudson Pkwy / W 231st St / Jerome Av",
        code: "Bx10"
    },
    {
        name: "Bx11 George Washington Bridge - Parkchestervia E 170th St /  E 174th St",
        code: "Bx11"
    },
    {
        name: "Bx12 Pelham Bay - Inwoodvia Pelham Pkwy / Fordham Rd",
        code: "Bx12"
    },
    {
        name: "Bx12-SBS Bay Plaza - InwoodSelect Bus Service via Pelham Pkwy / Fordham Rd",
        code: "Bx12-SBS"
    },
    {
        name: "Bx13 George Washington Bridge - Bronx Terminal Marketvia W 181st St / Ogden Av / River Av",
        code: "Bx13"
    },
    {
        name: "Bx15 Fordham Plaza - The Hubvia 3rd Av",
        code: "Bx15"
    },
    {
        name: "Bx16 Pelham - Norwoodvia E 233rd St / Nereid Av",
        code: "Bx16"
    },
    {
        name: "Bx17 Fordham Plaza - Port Morrisvia Crotona Av / Prospect Av",
        code: "Bx17"
    },
    {
        name: "Bx18A Morris Heights/High Bridge Circulatorvia 168 St / Undercliff Av",
        code: "Bx18A"
    },
    {
        name: "Bx18B Morris Heights/High Bridge Circulatorvia 168 St / Sedgwick Av",
        code: "Bx18B"
    },
    {
        name: "Bx19 NY Botanical Garden - Riverbank Parkvia Southern Bl / E 149th St",
        code: "Bx19"
    },
    {
        name: "Bx20 Riverdale - Inwoodvia Broadway / Henry Hudson Pkwy",
        code: "Bx20"
    },
    {
        name: "Bx21 Westchester Sq - Mott Havenvia Morris Park Av / Boston Rd",
        code: "Bx21"
    },
    {
        name: "Bx22 Bedford Park - Castle Hillvia Castle Hill Av / Fordham Rd",
        code: "Bx22"
    },
    {
        name: "Bx23 Pelham Bay - Co-Op City",
        code: "Bx23"
    },
    {
        name: "Bx24 Country Club - Hutchinson Metro Centervia Westchester Av / Country Club Loop",
        code: "Bx24"
    },
    {
        name: "Bx25 Co-op City Bay Plaza - Bedford Parkvia Allerton Av",
        code: "Bx25"
    },
    {
        name: "Bx26 Co-op City Section 5 - Bedford Parkvia Allerton Av / Co-op City Blvd",
        code: "Bx26"
    },
    {
        name: "Bx27 Clasons Pt - Gladstone Sqvia Westchester Av / Soundview Av",
        code: "Bx27"
    },
    {
        name: "Bx28 Co-op City Section 5 - Fordham Centervia E Gun Hill Rd / Bartow Av",
        code: "Bx28"
    },
    {
        name: "Bx29 City Island - Pelham Bayvia City Island Rd / City Island Av",
        code: "Bx29"
    },
    {
        name: "Bx30 Co-op City Section 5 - Pelham Parkwayvia Boston Rd",
        code: "Bx30"
    },
    {
        name: "Bx31 Woodlawn - Westchester Sqvia E 233 St / Eastchester Rd",
        code: "Bx31"
    },
    {
        name: "Bx32 Kingsbridge VA Hospital - Mott Havenvia Morris Av / Jerome Av",
        code: "Bx32"
    },
    {
        name: "Bx33 Port Morris - Harlemvia E 138th St / W 135th St",
        code: "Bx33"
    },
    {
        name: "Bx34 Woodlawn - Fordham Centervia Katonah Av / Bainbridge Av / Valentine Av",
        code: "Bx34"
    },
    {
        name: "Bx35 George Washington Bridge-West Farms Roadvia E 167th / W 181st St",
        code: "Bx35"
    },
    {
        name: "Bx36 Soundview - George Washington Bridgevia E Tremont Av / White Plains Rd",
        code: "Bx36"
    },
    {
        name: "Bx38 Co-op City Bay Plaza - Norwoodvia E Gun Hill Rd / Co-op City Blvd",
        code: "Bx38"
    },
    {
        name: "Bx39 Wakefield - Clasons Ptvia White Plains Rd",
        code: "Bx39"
    },
    {
        name: "Bx40 Throgs Neck - River Park Towersvia E Tremont Av / E 180th St / Burnside Av",
        code: "Bx40"
    },
    {
        name: "Bx41 Williamsbridge - The Hubvia Webster Av",
        code: "Bx41"
    },
    {
        name: "Bx41-SBS Williamsbridge - The HubSelect Bus Service via Webster Av",
        code: "Bx41-SBS"
    },
    {
        name: "Bx42 Throgs Neck - River Park Towersvia E Tremont Av / E 180th St / Burnside Av",
        code: "Bx42"
    },
    {
        name: "Bx46 Prospect Av - Westchester Av / Hunts Point Marketvia Barretto PK",
        code: "Bx46"
    },
    {
        name: "BxM1 Riverdale - East MidtownVia Riverdale / H. Hudson / Lex & 3 Av",
        code: "BxM1"
    },
    {
        name: "BxM2 Riverdale - West MidtownVia Riverdale / H. Hudson / 6Th & 7Th Av",
        code: "BxM2"
    },
    {
        name: "BxM3 Yonkers - MidtownVia Bway / Sedgwick Av / 5Th & Madison",
        code: "BxM3"
    },
    {
        name: "BxM4 Woodlawn - MidtownVia Katonah Av / Grand Concourse",
        code: "BxM4"
    },
    {
        name: "BxM6 Parkchester - MidtownVia Metropolitan Oval / 5Th & Madison",
        code: "BxM6"
    },
    {
        name: "BxM7 Co-Op City - MidtownVia Co-Op City Bl / Bartow / 5Th & Mad",
        code: "BxM7"
    },
    {
        name: "BxM8 Pelham Bay/City Island - MidtownVia Bruckner Blvd / 5Th & Madison",
        code: "BxM8"
    },
    {
        name: "BxM9 Throgs Neck - MidtownVia Edgewater Pk / Throgs Neck / Schuylerville",
        code: "BxM9"
    },
    {
        name: "BxM10 Williamsbridge/Morris Park - MidtownVia Eastchester / Morris Pk",
        code: "BxM10"
    },
    {
        name: "BxM11 Wakefield - MidtownVia White Plains Rd / 5Th & Madison Av",
        code: "BxM11"
    },
    {
        name: "BxM18 Riverdale - DowntownVia Riverdale / H. Hudsn / Bway & Trnty",
        code: "BxM18"
    },
    {
        name: "D90 D Shuttle Bus - Mosholu Pkwy #4 - 205 Stvia Crand Concourse",
        code: "D90"
    },
    {
        name: "J90 J Shuttle Bus - Crescent St - Jamaica Van Wyck Stationvia Jamaica Av",
        code: "J90"
    },
    {
        name: "L90 L Shuttle Bus - Lorimer St - Myrtle Wyckoff Avsvia Wyckoff Av / Metropolitan Av",
        code: "L90"
    },
    {
        name: "L92 L Shuttle Bus - Abingdon Sq - FDR Drivevia 14 St",
        code: "L92"
    },
    {
        name: "M1 Harlem - East Villagevia 5th Av / Madison Av",
        code: "M1"
    },
    {
        name: "M2 Washington Heights - East Villagevia 5th Av / Madison Av / AC Powell Blvd",
        code: "M2"
    },
    {
        name: "M3 Fort George - East Villagevia 5th Av / Madison Av / St Nicholas Av",
        code: "M3"
    },
    {
        name: "M4 The Cloisters - 32 Stvia 5th Av / Madison Av / Broadway / Ft.Washington Av",
        code: "M4"
    },
    {
        name: "M5 George Washington Bridge - 31 St & 6 Avvia 5th Av / Av of Americas / Riverside Dr",
        code: "M5"
    },
    {
        name: "M7 Harlem - 14th Streetvia Columbus / Amsterdam / 6 & 7 Av / Bway",
        code: "M7"
    },
    {
        name: "M8 West Village - East Villagevia 8 & 9 St Crosstown",
        code: "M8"
    },
    {
        name: "M9 Battery Park City - Kips Bayvia Avenue C / E Broadway",
        code: "M9"
    },
    {
        name: "M10 Harlem - Columbus Circlevia Central Park West / Frederick Douglass Blvd",
        code: "M10"
    },
    {
        name: "M11 Riverbank Park & Harlem - West Villagevia 9th - Columbus Av / 10th - Amsterdam Av",
        code: "M11"
    },
    {
        name: "M12 Midtown West - West Villagevia 11 Av / 12 Av",
        code: "M12"
    },
    {
        name: "M14A-SBS Lower East Side - Abingdon SqSelect Bus Service via 14th St / Av A",
        code: "M14A-SBS"
    },
    {
        name: "M14D-SBS Lower East Side - Chelsea PiersSelect Bus Service via 14th St / Av D",
        code: "M14D-SBS"
    },
    {
        name: "M15 East Harlem - South Ferryvia 1st Av / 2nd Av",
        code: "M15"
    },
    {
        name: "M15-SBS East Harlem - South FerrySelect Bus Service via 1st Av / 2nd Av",
        code: "M15-SBS"
    },
    {
        name: "M20 Lincoln Center - South Ferryvia 7th Av / 8th Av / Battery Park City",
        code: "M20"
    },
    {
        name: "M21 Lower East Side - West Villagevia Houston St Crosstown",
        code: "M21"
    },
    {
        name: "M22 Lower East Side - Battery Park Cityvia Madison St / Chambers St",
        code: "M22"
    },
    {
        name: "M23-SBS Chelsea Piers - East SideSelect Bus Service via 23rd St Crosstown",
        code: "M23-SBS"
    },
    {
        name: "M31 Yorkville - Clintonvia  York Av / 57th St",
        code: "M31"
    },
    {
        name: "M34-SBS East Side - Javits CenterSelect Bus Service via 34th St Crosstown",
        code: "M34-SBS"
    },
    {
        name: "M34A-SBS Waterside - Port Authority TerminalSelect Bus Service via 34th St Crosstown",
        code: "M34A-SBS"
    },
    {
        name: "M35 Ward's Island - East Harlemvia Randall's Island / RFK Bridge",
        code: "M35"
    },
    {
        name: "M42 United Nations - W 42 St Piervia 42nd St Crosstown",
        code: "M42"
    },
    {
        name: "M50 W 42 St Pier - East Sidevia 49th St / 50th St Crosstown",
        code: "M50"
    },
    {
        name: "M55 W 44 St  - South Ferryvia 5 Av & 6 Av",
        code: "M55"
    },
    {
        name: "M57 East Side - West Sidevia 57th St Crosstown",
        code: "M57"
    },
    {
        name: "M60-SBS West Side - LaGuardia AirportSelect Bus Service via 125th St / Astoria Blvd",
        code: "M60-SBS"
    },
    {
        name: "M66 East Side - Lincoln Centervia 65th & 68th St (East) / 67th & 66th St (West)",
        code: "M66"
    },
    {
        name: "M72 East Side - West Sidevia 72nd St Crosstown",
        code: "M72"
    },
    {
        name: "M79-SBS Yorkville - West SideSelect Bus Service via 79th St Crosstown",
        code: "M79-SBS"
    },
    {
        name: "M86-SBS Yorkville - West SideSelect Bus Service via 86th St Crosstown",
        code: "M86-SBS"
    },
    {
        name: "M90 M Shuttle Bus - Metropolitan Av - Myrtle Avvia Myrtle Av",
        code: "M90"
    },
    {
        name: "M96 East Side - West Sidevia 96th St Crosstown",
        code: "M96"
    },
    {
        name: "M98 Washington Heights - Upper East Side LTDvia Harlem River Dr / Lexington / 3rd",
        code: "M98"
    },
    {
        name: "M100 Inwood - Harlemvia Broadway / Amsterdam Av",
        code: "M100"
    },
    {
        name: "M101 East Village - Fort Georgevia Third Av / Lexington Av / Amsterdam Av",
        code: "M101"
    },
    {
        name: "M102 Harlem - East Villagevia 3rd Av / Lexington Av / Lenox Av",
        code: "M102"
    },
    {
        name: "M103 East Harlem - City Hallvia 3rd Av / Lexington Av",
        code: "M103"
    },
    {
        name: "M104 West Harlem - Times Squarevia Broadway / 8th Av",
        code: "M104"
    },
    {
        name: "M106 East Harlem - West Sidevia 96th St / E 106th St Crosstown",
        code: "M106"
    },
    {
        name: "M116 West Side - East Harlemvia 116th St Crosstown",
        code: "M116"
    },
    {
        name: "M125 Manhattanville - The Hubvia 125th St / Willis Av",
        code: "M125"
    },
    {
        name: "Q1 Queens Village / Bellerose - Jamaicavia Springfield Blvd / Braddock Av / Hillside Av",
        code: "Q1"
    },
    {
        name: "Q2 Queens Village - Jamaicavia Hollis Av / Hillside Av",
        code: "Q2"
    },
    {
        name: "Q3 Jamaica - JFK Airportvia Farmers Blvd / Hillside Av",
        code: "Q3"
    },
    {
        name: "Q4 Cambria Heights - Jamaicavia Linden Blvd / Merrick Blvd",
        code: "Q4"
    },
    {
        name: "Q5 Rosedale or Green Acres Mall - Jamaicavia Merrick Blvd / Hook Creek Blvd / Sunrise Highway",
        code: "Q5"
    },
    {
        name: "Q6 Jamaica - Sutphin Blvd - Jfk Cargo AreaVia Sutphin Blvd / Rockaway Blvd",
        code: "Q6"
    },
    {
        name: "Q7 East Ny - Rockaway Blvd - Jfk Cargo AreaVia Rockaway Blvd",
        code: "Q7"
    },
    {
        name: "Q8 Gateway Mall / East Ny - JamaicaVia 101St Av",
        code: "Q8"
    },
    {
        name: "Q9 South Ozone Park - JamaicaVia Van Wyck Expwy / 135Th St / Lincoln St",
        code: "Q9"
    },
    {
        name: "Q10 Kew Gardens - Jfk Airport",
        code: "Q10"
    },
    {
        name: "Q11 Elmhurst / Queens Ctr - Old Howard BchVia Woodhaven Blvd",
        code: "Q11"
    },
    {
        name: "Q12 Little Neck - Flushingvia Sanford Av / Northern Blvd",
        code: "Q12"
    },
    {
        name: "Q13 Fort Totten - Flushingvia Northern Blvd / Bell Blvd",
        code: "Q13"
    },
    {
        name: "Q15 Flushing - Beechhurstvia 150th St / 154th St",
        code: "Q15"
    },
    {
        name: "Q15A Flushing - Beechhurst / Whitestonevia 150th St / Whitestone",
        code: "Q15A"
    },
    {
        name: "Q16 Fort Totten - Flushingvia Bayside Av / Francis Lewis Blvd / Utopia Parkway",
        code: "Q16"
    },
    {
        name: "Q17 Flushing - Jamaicavia Kissena Blvd / Horace Harding Expwy / 188th St / Hillside Av",
        code: "Q17"
    },
    {
        name: "Q18 Astoria - MaspethVia 30Th Av / 58Th St / 65Th Pl",
        code: "Q18"
    },
    {
        name: "Q19 Astoria - FlushingVia Astoria Blvd",
        code: "Q19"
    },
    {
        name: "Q20A College Point - Jamaicavia 20 Av / Main St",
        code: "Q20A"
    },
    {
        name: "Q20B College Point - Jamaicavia 14 Av / Main St",
        code: "Q20B"
    },
    {
        name: "Q21 Elmhurst / Queens Ctr - Howard BeachVia Woodhaven Blvd / Cross Bay Blvd / Lindenwood",
        code: "Q21"
    },
    {
        name: "Q22 Roxbury - Rockaway Pk - Far RockawayVia Rockaway Beach Blvd / Beach Channel Dr",
        code: "Q22"
    },
    {
        name: "Q23 East Elmhurst - Forest HillsVia 108Th St",
        code: "Q23"
    },
    {
        name: "Q24 Broadway Junction - Jamaicavia Atlantic Av",
        code: "Q24"
    },
    {
        name: "Q25 Jamaica - Flushing - College PointVia Parsons Blvd / Kissena Blvd / 127Th St",
        code: "Q25"
    },
    {
        name: "Q26 Fresh Meadows - Flushing (Part-time)via Hollis Court Blvd / 46th Av / Parsons Blvd",
        code: "Q26"
    },
    {
        name: "Q27 Cambria Heights - Flushingvia Springfield Blvd / Rocky Hill Rd / 46th Av / Kissena Blvd",
        code: "Q27"
    },
    {
        name: "Q28 Bayside - Flushingvia Northern Blvd / 32nd Av / Corporal Kennedy St",
        code: "Q28"
    },
    {
        name: "Q29 Jackson Heights - GlendaleVia Dry Harbor Rd / 80Th St",
        code: "Q29"
    },
    {
        name: "Q30 Little Neck or Queensborough Community College - Jamaicavia Horace Harding Expwy / Utopia Pkwy / Homelawn St",
        code: "Q30"
    },
    {
        name: "Q31 Bayside - Jamaicavia Bell Blvd / Utopia Pkwy / Homelawn St",
        code: "Q31"
    },
    {
        name: "Q32 Jackson Heights - Penn Stationvia Roosevelt Av / Queens Blvd / Fifth Av / Madison Av",
        code: "Q32"
    },
    {
        name: "Q33 Jackson Heights - East ElmhurstVia Roosevelt Av / 82Nd & 83Rd Sts / 23Rd Av",
        code: "Q33"
    },
    {
        name: "Q34 Jamaica - Flushing - WhitestoneVia Parsons Blvd / Kissena Blvd / Mitchell Gardens",
        code: "Q34"
    },
    {
        name: "Q35 Rockaway Park - Midwood / Brooklyn Coll.Via Flatbush Av / Newport Ave",
        code: "Q35"
    },
    {
        name: "Q36 Floral Park or Little Neck - Jamaicavia Jamaica Av / Hillside Av / Little Neck Pkwy",
        code: "Q36"
    },
    {
        name: "Q37 Kew Gardens - South Ozone ParkVia 135Th Av / 111St St / Park Ln South",
        code: "Q37"
    },
    {
        name: "Q38 Corona - Rego ParkVia Penelope Av / Eliot Av / Queens Center",
        code: "Q38"
    },
    {
        name: "Q39 Long Island City - RidgewoodVia Forest Av / 58Th St / 48Th Av",
        code: "Q39"
    },
    {
        name: "Q40 South Ozone Park - JamaicaVia 142Nd St / Lakewood Av / Sutphin Blvd",
        code: "Q40"
    },
    {
        name: "Q41 Jamaica - Howard BeachVia 127 St / 109 Ave / Cross Bay Blvd / Lindenwood",
        code: "Q41"
    },
    {
        name: "Q42 Addeslieigh Park - Jamaicavia 174 St / Liberty Av / Sayres Av",
        code: "Q42"
    },
    {
        name: "Q43 Floral Park - Jamaicavia Sutphin Blvd / Hillside Av",
        code: "Q43"
    },
    {
        name: "Q44-SBS Bronx Zoo - JamaicaSelect Bus Service via Main St / Cross Bronx Svc Rd (Q20 Limited)",
        code: "Q44-SBS"
    },
    {
        name: "Q46 Glen Oaks - Kew Gardensvia Union Turnpike",
        code: "Q46"
    },
    {
        name: "Q47 Atlas Mall - Lga Marine Air TerminalVia Atlas Mall / 80Th St / 74Th St Bus Terminal",
        code: "Q47"
    },
    {
        name: "Q48 Flushing - LaGuardia Airportvia Roosevelt Av / 108th St / Ditmars Blvd",
        code: "Q48"
    },
    {
        name: "Q49 Jackson Heights - East ElmhurstVia 35Th Av / 89Th & 92Nd Sts / Astoria Blvd",
        code: "Q49"
    },
    {
        name: "Q50 Co-Op City/Pelham Bay - Flushing",
        code: "Q50"
    },
    {
        name: "Q52-SBS Elmhurst - ArverneVia Woodhaven Blvd / Cross Bay Blvd",
        code: "Q52-SBS"
    },
    {
        name: "Q53-SBS Woodside - Rockaway ParkVia Broadway / Queens Blvd / Woodhaven Blvd / Cross Bay Blvd",
        code: "Q53-SBS"
    },
    {
        name: "Q54 Williamsburg - Jamaicavia Jamaica Av / Metropolitan Av",
        code: "Q54"
    },
    {
        name: "Q55 Ridgewood - Richmond Hillvia Myrtle Av",
        code: "Q55"
    },
    {
        name: "Q56 Broadway Junction - Jamaicavia Jamaica Av",
        code: "Q56"
    },
    {
        name: "Q58 Ridgewood - Flushingvia Fresh Pond Rd / Corona Av / College Pt Blvd",
        code: "Q58"
    },
    {
        name: "Q59 Williamsburg - Rego Parkvia Grand St / Grand Av / Queens Blvd",
        code: "Q59"
    },
    {
        name: "Q60 Queens Blvd. - East MidtownVia Queens Blvd / Sutphin Blvd",
        code: "Q60"
    },
    {
        name: "Q64 Forest Hills - PomonokVia Jewel Ave",
        code: "Q64"
    },
    {
        name: "Q65 Jamaica - Flushing - College PointVia 164Th St / College Point Blvd",
        code: "Q65"
    },
    {
        name: "Q66 Flushing - Long Island CityVia Northern Blvd / 21St St / Queens Plaza",
        code: "Q66"
    },
    {
        name: "Q67 Middle Village - Long Island CityVia 69Th St / Borden Av",
        code: "Q67"
    },
    {
        name: "Q69 Long Island City - AstoriaVia 21St St / Ditmars Blvd",
        code: "Q69"
    },
    {
        name: "Q70-SBS LaGuardia LinkWoodside LIRR, Jackson Heights E F M R 7 Subway, LaGuardia Airport",
        code: "Q70-SBS"
    },
    {
        name: "Q72 LaGuardia Airport - Rego ParkVia 94Th St / Junction Blvd",
        code: "Q72"
    },
    {
        name: "Q76 College Point - Jamaicavia Francis Lewis Blvd / Hillside Av",
        code: "Q76"
    },
    {
        name: "Q77 Laurelton - Jamaicavia Springfield / Francis Lewis / Hillside Av",
        code: "Q77"
    },
    {
        name: "Q83 Cambria Heights - Jamaicavia Murdock Av / Liberty Av (Local and Limited-stop Service) Av",
        code: "Q83"
    },
    {
        name: "Q84 Laurelton - Jamaicavia Merrick Blvd / 120th Av",
        code: "Q84"
    },
    {
        name: "Q85 Rosedale or Green Acres Shopping Mall - Jamaicavia Merrick Blvd / Conduit Av",
        code: "Q85"
    },
    {
        name: "Q88 Elmhurst - Queens Villagevia Horace Harding Expwy / 73rd Av / Springfield Blvd",
        code: "Q88"
    },
    {
        name: "Q90 Q Shuttle Bus - Barclays Ctr - Prospect Parkvia Flatbush Av",
        code: "Q90"
    },
    {
        name: "Q92 7 Shuttle Bus - Times Square - Hudson Yardsvia 42 St",
        code: "Q92"
    },
    {
        name: "Q93 7 Shuttle Bus - Queensboro Plz - Vernon Bl-Jackson Avvia Jackson Av",
        code: "Q93"
    },
    {
        name: "Q94 F Shuttle Bus - Roosevelt Island - Queens Plazavia Jackson Av",
        code: "Q94"
    },
    {
        name: "Q95 F Shuttle Bus - 21 St/Queensbridge  - Queens Plazavia Jackson Av",
        code: "Q95"
    },
    {
        name: "Q96 E Shuttle Bus - 21 St/Queensbridge - Court Sqvia Jackson Av",
        code: "Q96"
    },
    {
        name: "Q100 Astoria / Rikers Isl - Long Isl City LtdVia 21St St / 20Th Av",
        code: "Q100"
    },
    {
        name: "Q101 Astoria - East MidtownVia Steinway St",
        code: "Q101"
    },
    {
        name: "Q102 Astoria - Roosevelt IslandVia 30Th Av / 31St St",
        code: "Q102"
    },
    {
        name: "Q103 Astoria - Hunters PointVia Vernon Blvd",
        code: "Q103"
    },
    {
        name: "Q104 Long Island City - SunnysideVia Broadway / 48Th St",
        code: "Q104"
    },
    {
        name: "Q107 7 Shuttle Bus - 74 St/Roosevelt Av - Queens Plazavia Queens Blvd/Roosevelt Av",
        code: "Q107"
    },
    {
        name: "Q108 N Shuttle Bus - 39 Av - Queens Plazavia Jackson Av",
        code: "Q108"
    },
    {
        name: "Q110 Jamaica - Queens VillageVia Jamaica Av / Hempstead Av",
        code: "Q110"
    },
    {
        name: "Q111 Jamaica - RosedaleVia Brewer Blvd / 147 Av",
        code: "Q111"
    },
    {
        name: "Q112 Jamaica - Ozone ParkVia Liberty Av",
        code: "Q112"
    },
    {
        name: "Q113 Jamaica - Far Rockaway LimitedVia Brewer Blvd / Rockaway Blvd / Nassau Expwy",
        code: "Q113"
    },
    {
        name: "Q114 Jamaica - Far Rockaway LimitedVia Brewer Blvd / Rockaway Blvd",
        code: "Q114"
    },
    {
        name: "QM1 Fresh Meadows - Midtown Via 6Th AvVia 188Th St / Union Turnpike",
        code: "QM1"
    },
    {
        name: "QM2 Bay Terrace - Midtown Via 6Th AvVia Cross Island Pkwy / Whitestone Expwy",
        code: "QM2"
    },
    {
        name: "QM3 Little Neck - MidtownVia Northern Blvd",
        code: "QM3"
    },
    {
        name: "QM4 Electchester - Midtown Via 6Th AvVia Jewel Av",
        code: "QM4"
    },
    {
        name: "QM5 Glen Oaks - Midtown Via 6Th AvVia Horace Harding Expwy / 73Rd Av / Union Turnpike",
        code: "QM5"
    },
    {
        name: "QM6 Lake Success - Midtown Via 6Th AvVia North Shore Towers / Union Turnpike",
        code: "QM6"
    },
    {
        name: "QM7 Fresh Meadows - DowntownVia 188Th St / Union Turnpike",
        code: "QM7"
    },
    {
        name: "QM8 Glen Oaks - DowntownVia Horace Harding Expwy / 73Rd Av / Union Turnpike",
        code: "QM8"
    },
    {
        name: "QM10 Lefrak City - Midtown Via 6Th AvVia 63Rd Rd / 57Th Av",
        code: "QM10"
    },
    {
        name: "QM11 Forest Hills - DowntownVia Queens Blvd / 63Rd Rd / 57Th Av",
        code: "QM11"
    },
    {
        name: "QM12 Forest Hills - Midtown Via 6Th AvVia Yellowstone Blvd",
        code: "QM12"
    },
    {
        name: "QM15 Lindenwood - Midtown ExpressVia 157Th Av / Woodhaven Blvd",
        code: "QM15"
    },
    {
        name: "QM16 Neponsit - Midtown ExpressVia Rockaway Beach Blvd / Cross Bay Blvd",
        code: "QM16"
    },
    {
        name: "QM17 Far Rockaway - Midtown ExpressVia Beach Channel Dr / Rockaway Beach Blvd / Cross Bay Blvd",
        code: "QM17"
    },
    {
        name: "QM18 South Ozone Park - Midtown ExpressVia Lefferts Blvd / Queens Blvd",
        code: "QM18"
    },
    {
        name: "QM20 Bay Terrace - MidtownVia 26Th Av / Utopia Pkwy / Willets Point Blvd / Mitchell Gardens",
        code: "QM20"
    },
    {
        name: "QM21 Rochdale Village - MidtownVia Bedell St / Brewer Blvd / Linden Blvd.",
        code: "QM21"
    },
    {
        name: "QM24 Glendale - Midtown Via 6Th AvVia Myrtle Av / Fresh Pond Rd / Eliot Av",
        code: "QM24"
    },
    {
        name: "QM25 Glendale - DowntownVia Myrtle Av / Fresh Pond Rd / Eliot Av",
        code: "QM25"
    },
    {
        name: "QM31 Fresh Meadows - Midtown Via 3Rd AvVia 188Th St / Union Turnpike",
        code: "QM31"
    },
    {
        name: "QM32 Bay Terrace - Midtown Via 3Rd AvVia Cross Island Pkwy / Whitestone Expwy",
        code: "QM32"
    },
    {
        name: "QM34 Glendale - Midtown Via 3Rd AvVia Myrtle Av / Fresh Pond Rd / Eliot Av",
        code: "QM34"
    },
    {
        name: "QM35 Glen Oaks - Midtown Via 3Rd AvVia Horace Harding Expwy / 73Rd Av / Union Turnpike",
        code: "QM35"
    },
    {
        name: "QM36 Lake Success - Midtown Via 3Rd AvVia North Shore Towers / Union Turnpike",
        code: "QM36"
    },
    {
        name: "QM40 Lefrak City - Midtown Via 3Rd AvVia 63Rd Rd / 57Th Av",
        code: "QM40"
    },
    {
        name: "QM42 Forest Hills - Midtown Via 3Rd AvVia Yellowstone Blvd",
        code: "QM42"
    },
    {
        name: "QM44 Electchester - Midtown Via 3Rd AvVia Jewel Av",
        code: "QM44"
    },
    {
        name: "S40 St. George - Amazonvia Richmond Terrace",
        code: "S40"
    },
    {
        name: "S42 St. George - Clyde Placevia St Marks Pl / Jersey St",
        code: "S42"
    },
    {
        name: "S44 St. George - Staten Island Mallvia Richmond Av",
        code: "S44"
    },
    {
        name: "S46 St. George - West Shore Plazavia Castleton Av",
        code: "S46"
    },
    {
        name: "S48 St. George - Mariners Harborvia Forest Av",
        code: "S48"
    },
    {
        name: "S51 St. George - Grant Cityvia Bay St / Father Capodanno Blvd",
        code: "S51"
    },
    {
        name: "S52 St. George - Staten Island Univ. Hospitalvia Tompkins Av / Cebra Av / Jersey St",
        code: "S52"
    },
    {
        name: "S53 Port Richmond - Bay Ridgevia Verrazano-Narrows Bridge / Clove Rd",
        code: "S53"
    },
    {
        name: "S54 West New Brighton - Eltingvillevia Manor Rd",
        code: "S54"
    },
    {
        name: "S55 Rossville - Staten Island Mallvia Bloomingdale Rd / Annadale Rd / Richmond Av",
        code: "S55"
    },
    {
        name: "S56 Huguenot - Staten Island Mallvia Richmond Av / Arthur Kill Rd / Foster Rd",
        code: "S56"
    },
    {
        name: "S57 Port Richmond - New Dorpvia Rockland Av / Brielle Av / Bradley Av",
        code: "S57"
    },
    {
        name: "S59 Port Richmond - Tottenvillevia Richmond Av",
        code: "S59"
    },
    {
        name: "S61 St. George - Staten Island Mallvia Victory Blvd / Bradley Av",
        code: "S61"
    },
    {
        name: "S62 St. George - Travisvia Victory Blvd",
        code: "S62"
    },
    {
        name: "S66 St. George - Port Richmondvia Victory Blvd / Jewett Av",
        code: "S66"
    },
    {
        name: "S74 St. George - Bricktown Mallvia Richmond Rd / Arthur Kill Rd",
        code: "S74"
    },
    {
        name: "S76 St. George - Oakwoodvia Richmond Rd / New Dorp Ln",
        code: "S76"
    },
    {
        name: "S78 St. George - Bricktown Mallvia Hylan Blvd",
        code: "S78"
    },
    {
        name: "S79-SBS Staten Island Mall - Bay RidgeSelect Bus Service via Verrazano-Narrows Bridge / Hylan Blvd",
        code: "S79-SBS"
    },
    {
        name: "S81 St. George - Grant City LTDvia Bay St / Father Capodanno Blvd (S51 Limited)",
        code: "S81"
    },
    {
        name: "S84 St. George - Bricktown Mall LTDvia Richmond Rd / Arthur Kill Rd (S74 Limited)",
        code: "S84"
    },
    {
        name: "S86 St. George - Oakwood LTDvia Richmond Rd / New Dorp Ln (S76 Limited)",
        code: "S86"
    },
    {
        name: "S89 Eltingville - Bayonne LTDvia Richmond Av (S59 Limited)",
        code: "S89"
    },
    {
        name: "S90 St. George - Amazonvia Richmond Terrace (S40 Limited)",
        code: "S90"
    },
    {
        name: "S91 St. George - Staten Island Mall LTDvia Victory Blvd / Bradley Av (S61 Limited)",
        code: "S91"
    },
    {
        name: "S92 St. George - Travis LTDvia Victory Blvd (S62 Limited)",
        code: "S92"
    },
    {
        name: "S93 College of Staten Island - Bay Ridge LTDvia Verrazano-Narrows / Victory",
        code: "S93"
    },
    {
        name: "S94 St. George - Staten Island Mall LTDvia Richmond Av (S44 Limited)",
        code: "S94"
    },
    {
        name: "S96 St. George - West Shore Plaza LTDvia Castleton Av (S46 Limited)",
        code: "S96"
    },
    {
        name: "S98 St. George - Mariners Harbor LTDvia Forest Av (S48 Limited)",
        code: "S98"
    },
    {
        name: "SIM1 Eltingville - Lower Manhattan Expressvia Hylan Bl / Richmond Av",
        code: "SIM1"
    },
    {
        name: "SIM1C Eltingville - Manhattan Expressvia Hylan Bl / Richmond Av",
        code: "SIM1C"
    },
    {
        name: "SIM2 Tottenville - Lower Manhattan Expressvia Huguenot Av / Hylan Bl",
        code: "SIM2"
    },
    {
        name: "SIM3 Pt. Richmond - Midtown Manhattan Expressvia Watchogue Rd",
        code: "SIM3"
    },
    {
        name: "SIM3C Pt. Richmond - Manhattan Expressvia Watchogue Rd",
        code: "SIM3C"
    },
    {
        name: "SIM4 Eltingville - Lower Manhattan Expressvia Richmond Av",
        code: "SIM4"
    },
    {
        name: "SIM4C Huguenot - Manhattan Expressvia Richmond Av",
        code: "SIM4C"
    },
    {
        name: "SIM4X S.I. Mall - Lower Manhattan Expressvia Park and Ride / Church St",
        code: "SIM4X"
    },
    {
        name: "SIM5 Eltingville - Lower Manhattan Expressvia F Capodanno / Giffords La",
        code: "SIM5"
    },
    {
        name: "SIM6 Eltingville - Midtown Manhattan Expressvia F Capodanno / Giffords La",
        code: "SIM6"
    },
    {
        name: "SIM7 Eltingville - Greenwich Village Expressvia Hylan Bl / Richmond Av",
        code: "SIM7"
    },
    {
        name: "SIM8 Huguenot - Midtown Manhattan Expressvia Richmond Av / Woodrow Rd",
        code: "SIM8"
    },
    {
        name: "SIM8X S.I. Mall - Midtown Manhattan Expressvia Park and Ride / 42 St",
        code: "SIM8X"
    },
    {
        name: "SIM9 Eltingville - Greenwich Village Expressvia F Capodanno Blvd",
        code: "SIM9"
    },
    {
        name: "SIM10 Eltingville - Midtown Manhattan Expressvia Hylan Bl",
        code: "SIM10"
    },
    {
        name: "SIM11 New Dorp - Midtown Manhattan Expressvia Hylan Bl / Madison Av / Lexington Av",
        code: "SIM11"
    },
    {
        name: "SIM15 Eltingville - Lower Manhattan Expressvia Richmond Rd",
        code: "SIM15"
    },
    {
        name: "SIM22 Eltingville - Midtown Manhattan Expressvia Arthur Kill Rd / Richmond Av",
        code: "SIM22"
    },
    {
        name: "SIM23 Annadale - Midtown Manhattan Expressvia Arden Av",
        code: "SIM23"
    },
    {
        name: "SIM24 Prince's Bay - Midtown Manhattan Expressvia Huguenot Av",
        code: "SIM24"
    },
    {
        name: "SIM25 Tottenville - Midtown Manhattan Expressvia Rossville Av",
        code: "SIM25"
    },
    {
        name: "SIM26 Tottenville - Midtown Manhattan Expressvia Bloomingdale Rd",
        code: "SIM26"
    },
    {
        name: "SIM30 Sunnyside - Midtown Manhattan Expressvia Forest Av",
        code: "SIM30"
    },
    {
        name: "SIM31 Eltingville - Midtown Manhattan Expressvia Forest Hill Rd",
        code: "SIM31"
    },
    {
        name: "SIM32 Travis - Lower Manhattan Expressvia N Gannon Av / Victory Bl",
        code: "SIM32"
    },
    {
        name: "SIM33 Mariners Harbor - Manhattan Expressvia N Gannon Av",
        code: "SIM33"
    },
    {
        name: "SIM33C Mariners Harbor - Greenwich Village Expressvia N Gannon Av",
        code: "SIM33C"
    },
    {
        name: "SIM34 Mariners Harbor - Lower Manhattan Expressvia Watchogue Rd",
        code: "SIM34"
    },
    {
        name: "SIM35 Port Richmond - Lower Manhattan Expressvia Clove Rd",
        code: "SIM35"
    },
    {
        name: "X27 Bay Ridge - Manhattan Expressvia Shore Rd",
        code: "X27"
    },
    {
        name: "X28 Sea Gate / Bensonhurst - Manhattan Expressvia Surf Av / Cropsey Av",
        code: "X28"
    },
    {
        name: "X37 Bay Ridge - Midtown Manhattan Expressvia Shore Rd",
        code: "X37"
    },
    {
        name: "X38 Sea Gate / Bensonhurst - Midtown Manhattan Expressvia Surf Av / Cropsey Av",
        code: "X38"
    },
    {
        name: "X63 Rosedale - Midtown Manhattan Expressvia Merrick Bl / Francis Lewis Bl",
        code: "X63"
    },
    {
        name: "X64 Cambria Heights - Midtown Manhattan Expressvia Linden Bl / Farmers Bl / Liberty Av",
        code: "X64"
    },
    {
        name: "X68 Floral Park - Midtown Manhattan Expressvia Hillside Av / Queens Bl",
        code: "X68"
    }
];
export {busesList};