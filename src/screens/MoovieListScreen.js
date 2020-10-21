import React from "react"
import {StyleSheet, Image, Text, View, TextInput} from "react-native"
import {Container, Input, Item, H1, Form, Button, Icon, Header, }from "native-base"


const MoovieListScreen = () => {
  return (
    <Container style={{backgroundColor:"gray"}} >
        <Header searchBar style={{width:"85%", backgroundColor:"orange"}} >
          <Item>
             <Input placeholder="Buscar"/>
          </Item>
        <Button icon>
          <Icon name="search" />
        </Button>
      </Header>
      <H1 style={{marginTop:20}}>Ultimas Peliculas</H1>
      <Image 
        source= {require("../../assets/icono1.png")} 
        style={styles.movieImage}
        />
      <Text>Esta es la pantalla de listado de peliculas</Text>
      <Text>Valoracion</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: 15,
  },
  movieImage:{
    width: "100%",
    height: 100,
    resizeMode:"center",
  },
  searchInput: {
    flex:1,
    flexDirection:"column",
    marginTop:10,
    marginRight:10,
  },
});

export default MoovieListScreen;
