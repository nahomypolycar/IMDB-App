import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function App() {
  console.log("statusBarHeight", Constants.statusBarHeight); // IOS 48 & Androïd 24
  console.log("platerform >>>>>", Platform.OS);
  const Matthew = "Matthew McConaughey";
  const Anne = "Anne Hathaway";
  const Jessica = "Jessica Chastain";
  const Mackenzie = "Mackenzie Foy";

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style={styles.statusBarStyle} />
        {/* style="light"  est ce qui permet de mettre le tetxe de la status en bar en blanc */}
        <View style={styles.logoBar}>
          <Image
            style={[styles.logo, styles.hero]}
            source={require("../IMDB-App/assets/logo-imdb.jpeg")}
          />
        </View>

        <View style={styles.blockBackground}>
          <View>
            <Text style={[styles.title, styles.hero, styles.text]}>
              Interstellar
            </Text>
            <View style={[styles.hero, styles.movieDetails]}>
              <Text style={styles.movieDetails}>2014</Text>
              <Text style={styles.movieDetails}>PG-13</Text>
              <Text style={styles.movieDetails}>2h 49min</Text>
              <Text style={styles.movieDetails}>Adventure, Drama, Sci-Fi</Text>
            </View>
          </View>
          <View style={[styles.firstBlock, styles.hero]}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.filmImage}
            />
            <View style={styles.firstBlockRight}>
              <Text style={{ color: "white", marginRight: 15 }}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={[styles.text, styles.buttonText]}>
                  + ADD WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.iconsInfos}>
            <View style={styles.iconsContents}>
              <FontAwesome name="star" size={24} color="yellow" />
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>8.6</Text>/10
              </Text>
              <Text style={styles.textBis}>1.1M</Text>
            </View>
            <View style={styles.iconsContents}>
              <FontAwesome name="star-o" size={24} color="white" />
              <Text style={styles.text}>RATE THIS</Text>
            </View>
            <View style={styles.iconsContents}>
              <Text
                style={{
                  backgroundColor: "#62C74F",
                  height: 18,
                  width: 24,
                  textAlign: "center",
                  color: "white",
                }}
              >
                74
              </Text>
              <Text style={styles.text}>Metascore</Text>
              <Text style={styles.textBis}>46 critic reviews</Text>
            </View>
          </View>
        </View>

        {/* SECOND BLOCK */}

        <View style={styles.blockTwo}>
          <View style={[styles.blockTitle, styles.hero]}>
            <Text style={{ color: "white", fontSize: 24 }}>
              Top Billed Cast
            </Text>
            <Text style={{ color: "#0277BD" }}>SEE ALL</Text>
          </View>
          <ScrollView
            horizontal={true}
            overScrollMode="always"
            style={styles.hero}
          >
            <View style={styles.horizontalView}>
              <View style={styles.actorsBlock}>
                <Image
                  source={require("./assets/matthew.jpg")}
                  style={styles.actorsImage}
                />
                <View style={styles.actorsName}>
                  <Text style={styles.text} numberOfLines={1}>
                    Matthew McConaughey
                  </Text>
                  <Text style={styles.textBis}>Cooper</Text>
                </View>
              </View>
              <View style={styles.actorsBlock}>
                <Image
                  source={require("./assets/anne.jpg")}
                  style={styles.actorsImage}
                />
                <View style={styles.actorsName}>
                  <Text style={styles.text}>Anne Hathaway</Text>
                  <Text style={styles.textBis}>Brand</Text>
                </View>
              </View>
              <View style={styles.actorsBlock}>
                <Image
                  source={require("./assets/jessica.jpg")}
                  style={styles.actorsImage}
                />
                <View style={styles.actorsName}>
                  <Text style={styles.text}>Jessica Chastain</Text>
                  <Text style={styles.textBis}>Murph</Text>
                </View>
              </View>
              <View style={styles.actorsBlock}>
                <Image
                  source={require("./assets/mackenzie.jpg")}
                  style={styles.actorsImage}
                />
                <View style={styles.actorsName}>
                  <Text style={styles.text}>Mackenzie Foy</Text>
                  <Text style={styles.textBis}>Murph (10 Yrs.)</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={[styles.hero, styles.bottomDetails]}>
            <Text style={styles.text}>Director</Text>
            <Text style={styles.textBis}>Christopher Nolan</Text>
          </View>
          <View style={[styles.hero, styles.bottomDetails]}>
            <Text style={styles.text}>Writers</Text>
            <Text style={styles.textBis}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // ------------------- GLOBAL -------------------

  container: {
    paddingTop: Platform.OS === "ios" ? 48 : 24,
    backgroundColor: "black",
    flex: 1,
  },
  hero: {
    marginHorizontal: 20,
    marginRight: 20,
  },
  text: {
    color: "white",
  },
  textBis: {
    color: "#818E94",
  },
  blockBackground: {
    backgroundColor: "#212121",
    marginTop: 20,
  },
  statusBarStyle: {
    style: "light",
    backgroundColor: "black",
    // style: Platform.OS === "android" ? "light" : "light",
  },
  // ------------------- HEADER -------------------

  logoBar: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    height: 60,
  },
  logo: {
    height: 40,
    width: 75,
    marginTop: 10,
    marginBottom: 10,
  },

  // ------------------- 1er block -------------------

  title: {
    fontSize: 35,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  movieDetails: {
    color: "#818E94",
    flexDirection: "row",
    gap: 10,
    marginTop: 7,
    marginRight: 10,
  },
  filmImage: {
    height: 200,
    width: 140,
    marginTop: 40,
  },

  button: {
    backgroundColor: "#0277BD",
    width: 190,
    height: 45,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    marginHorizontal: 20,
    marginVertical: 13,
    textAlign: "center",
    // comment déterminer la position du texte plus facilement ?
  },
  firstBlock: {
    flexDirection: "row",
  },
  firstBlockRight: {
    marginTop: 40,
    // width: 220,
    flex: 1,
    marginLeft: 20,
  },

  iconsInfos: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    justifyContent: "space-around",
    paddingBottom: 15,
  },

  iconsContents: {
    alignItems: "center",
  },

  // ------------------------------------- 2ème BLOCK ------------------------------------

  blockTwo: {
    backgroundColor: "#212121",
    marginTop: 30,
    paddingBottom: 30,
  },

  horizontalView: {
    flexDirection: "row",
  },

  blockTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 20,
  },

  actorsBlock: {
    backgroundColor: "#2A2A2A",
    width: 170,
    height: 290,
    marginRight: 20,
  },

  actorsImage: {
    height: 220,
    width: 170,
  },

  actorsName: {
    paddingLeft: 15,
    paddingTop: 15,
    width: 170,
    borderWidth: 1,
    borderColor: "red",
  },

  bottomDetails: {
    paddingTop: 15,
  },
});
