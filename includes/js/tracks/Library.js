(function (window) {

	function Library() {
		this.initialize();
	}

	//constructor
	Library.prototype.initialize = function () {
		this.loadLibrary();
	}

	Library.prototype.loadLibrary = function () {

		this.library = new Object;

		if (config.useDefaultLibrary) {
			this.library = LIBRARY.data;
		} else {
		
			data = new Object;
			var lib = this;
			$.ajax({
  				url: baseUrl+"api/templates",
  				dataType: 'json',
  				data: data,
  				async: false,
  				success: function(data) { 
  					lib.library = data;
  				},
  				error: function(request,error) {
  					console.log(error);
  				}
			});	
		}


		//Once loaded, check the version library
		if (this.library.version < config.minimumLibraryVersion) {
			console.fatal("Library.prototype.loadLibrary : wrong library version number");
		}
	}

	Library.prototype.getTrackConfig = function (name) {
		//TODO : create a more efficient retrieval method 

		for (var trackNumber in this.library.tracks) {
			if (this.library.tracks[trackNumber].name == name) return this.library.tracks[trackNumber]
		}

		console.error("Library.prototype.getTrackConfig : Track " + name + " not found");
		return null;
	}


	window.Library = Library;
}(window));