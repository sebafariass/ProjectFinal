<template>


<div class="noFound">
	<v-row class="text-center" cols="12">
			<v-col align="center" justify="center">

				<v-img
					src="https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg">
				</v-img>

				<v-btn color="red accent-4 my-3 white--text" :to="{ name: 'Registro' }"
					>Tuvimos un error!, te invitamos a subir una foto de tu mascota :)</v-btn>
			</v-col>
	</v-row>
</div>


</template>

<script>
	export default {
		name: 'NotFound',
	}
</script>

<style lang="scss" scoped></style>
