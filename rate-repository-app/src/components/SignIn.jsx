// @ts-nocheck
      import React from 'react';
      import { View, TextInput, Pressable, StyleSheet,Text } from 'react-native';
      import { Formik } from 'formik';

      const styles = StyleSheet.create({
        container: {
          padding: 16,
        },
        input: {
          borderWidth: 1,
          borderColor: '#999',
          padding: 8,
          marginBottom: 12,
          borderRadius: 4,
        },
        button: {
          backgroundColor: '#0366d6',
          padding: 12,
          borderRadius: 4,
          alignItems: 'center',
        },
        buttonText: {
          color: 'white',
          fontWeight: 'bold',
        },
      });

      const SignIn = () => {
        const onSubmit = (values) => {
          console.log(values);
        };

        return (
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={values.username}
                  onChangeText={handleChange('username')}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                <Pressable style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
              </View>
            )}
          </Formik>
        );
      };

      export default SignIn;