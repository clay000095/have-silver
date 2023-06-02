import axios from "axios";
const options = {
  method: "GET",
  url: "https://api.d-id.com/clips",
  headers: {
    accept: "application/json",
    authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoidGFsa3MiLCJodHRwczovL2QtaWQuY29tL2N4X2xvZ2ljX2lkIjoiIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmQtaWQuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3MzgwNTA5NjQwNzEwMDAxNTEyIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg1NjQwNzE2LCJleHAiOjE2ODU3MjcxMTYsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.Y_TjficpsF5Hj2UlGUOsFE8JRXBAy3EjeDl-HnaJOSdDgLr9Z0H13AiD3ABYH3GRDeu_NcgFcdYD05OmZvq__KnCkoQhLbHliTqtsoD3Y2bQ0PuasuKUuBYWg6huLkRPtxQmsKhT2d0jQ30Z0byY3w8a0NxXbS-xzqaWBYpzRegg6VuHfs3GOQv839cEijBd9r63CG0ibZTkCo0hWnkBsyWs2mDfKkWGVnR_DfzUmAJ5m8Stk-u0XpJ2Eb4PUGTBxYUQXS9MaeMbqHFTEH3DK_F-jof7RKUw3YgjV5bOGoxmEgLpUCPaeDxCw9iTT3shdhj3xtrsUDkVjQLbIiWLPg",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
